import { useState } from "react";
import { Plus, Image, Video, Type } from "lucide-react";

export default function BlogWritingPage() {
  const [title, setTitle] = useState("");
  const [blocks, setBlocks] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  const addBlock = (type) => {
    setBlocks([...blocks, { type, content: "" }]);
    setShowOptions(false);
  };

  const updateBlock = (index, value) => {
    const updated = [...blocks];
    updated[index].content = value;
    setBlocks(updated);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-10 pb-32">

        {/* Title */}
        <input
          type="text"
          placeholder="Blog title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && blocks.length === 0) {
              e.preventDefault();
              addBlock("text"); // ✅ auto add text block
            }
          }}
          className="w-full text-4xl font-bold outline-none mb-10"
        />

        {/* Content Blocks */}
        {blocks.map((block, index) => (
          <div key={index} className="mb-6">
            {block.type === "text" && (
              <textarea
                autoFocus
                placeholder="Write something..."
                value={block.content}
                onChange={(e) => updateBlock(index, e.target.value)}
                className="w-full text-lg outline-none resize-none min-h-[80px]"
              />
            )}

            {block.type === "image" && (
              <input type="file" accept="image/*" />
            )}

            {block.type === "video" && (
              <input type="file" accept="video/*" />
            )}
          </div>
        ))}

        {/* Plus Button */}
        <div className="relative mt-4">
          <button
            onClick={() => setShowOptions(!showOptions)}
            className="flex items-center gap-2 text-black"
          >
            <Plus size={22} />
            <span>Add content</span>
          </button>

          {/* Options */}
          {showOptions && (
            <div className="mt-3 bg-white border border-neutral-200 shadow-lg rounded-xl p-3 flex gap-3">
              <button onClick={() => addBlock("text")} className="p-2 text-black hover:bg-neutral-100 rounded-lg">
                <Type />
              </button>

              <button onClick={() => addBlock("image")} className="p-2 text-black hover:bg-neutral-100 rounded-lg">
                <Image />
              </button>

              <button onClick={() => addBlock("video")} className="p-2 text-black hover:bg-neutral-100 rounded-lg">
                <Video />
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
