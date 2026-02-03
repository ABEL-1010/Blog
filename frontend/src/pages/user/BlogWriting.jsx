import { useState, useRef, useEffect } from "react";
import { Plus, Image, Type } from "lucide-react";
import { createPost } from "../../api/posts.api";
import api from "../../api/axios";

export default function BlogWritingPage() {
  const [title, setTitle] = useState("");
  const [blocks, setBlocks] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [newBlockAdded, setNewBlockAdded] = useState(false);
  const lastBlockRef = useRef(null);
  const titleInputRef = useRef(null);

  const addBlock = (type) => {
    setBlocks((prev) => [...prev, { type, content: "" }]);
    setShowOptions(false);
    setNewBlockAdded(true);
  };

  const updateBlock = (index, value) => {
    setBlocks((prev) => {
      const updated = [...prev];
      updated[index].content = value;
      return updated;
    });
  };

  const handleFileChange = (index, file) => {
    updateBlock(index, file);
  };

  // Focus the last block input only when a new block is added
  useEffect(() => {
    if (newBlockAdded && lastBlockRef.current) {
      lastBlockRef.current.focus();
      setNewBlockAdded(false);
    }
  }, [newBlockAdded]);

  // Upload image and get URL
  const uploadFile = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await api.post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      return response.data.url;
    } catch (error) {
      console.error("Image upload failed:", error);
      return null;
    }
  };

  // Build content JSON
  const buildContent = async () => {
    const result = [];
    for (const block of blocks) {
      if (block.type === "text") {
        result.push({ type: "text", content: block.content });
      } else if (block.type === "image" && block.content instanceof File) {
        const url = await uploadFile(block.content);
        if (url) result.push({ type: "image", content: url });
      }
    }
    return result;
  };

  const handlePublish = async () => {
    try {
      if (!title.trim()) return alert("Title cannot be empty!");
      if (blocks.length === 0) return alert("Add at least one block!");

      const content = await buildContent();
      if (content.length === 0) return alert("Add some content or images!");

      await createPost({
        title,
        content: JSON.stringify(content),
        category_id: 1,
      });

      alert("Post submitted for approval 🚀");
      setTitle("");
      setBlocks([]);
    } catch (error) {
      console.error("Full error:", error.response?.data || error);
      alert("Failed to publish post");
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-10 pb-32">
        {/* Title */}
        <input
          ref={titleInputRef}
          type="text"
          placeholder="Blog title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full text-4xl font-bold outline-none mb-10"
        />

        {/* Content Blocks */}
        {blocks.map((block, index) => (
          <div key={index} className="mb-6">
            {block.type === "text" && (
              <textarea
                ref={index === blocks.length - 1 ? lastBlockRef : null}
                placeholder="Write something..."
                value={block.content}
                onChange={(e) => updateBlock(index, e.target.value)}
                className="w-full text-black text-lg outline-none resize-none min-h-[100px]"
              />
            )}
            {block.type === "image" && (
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(index, e.target.files[0])}
                  className="block"
                />
                {block.content && !(block.content instanceof File) && (
                  <p className="mt-2 text-green-600">Image uploaded</p>
                )}
              </div>
            )}
          </div>
        ))}

        {/* Add Content Button */}
        <div className="relative mt-4">
          <button
            onClick={() => setShowOptions(!showOptions)}
            className="flex items-center gap-2 text-black"
          >
            <Plus size={22} />
            <span>Add content</span>
          </button>

          {showOptions && (
            <div className="mt-3 bg-white border border-neutral-200 shadow-lg rounded-xl p-3 flex gap-3">
              <button
                onClick={() => addBlock("text")}
                className="p-2 text-black rounded-lg"
              >
                <Type />
              </button>
              <button
                onClick={() => addBlock("image")}
                className="p-2 text-black rounded-lg"
              >
                <Image />
              </button>
            </div>
          )}
        </div>

        {/* Publish Button */}
        <div className="mt-8">
          <button
            onClick={handlePublish}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}