export default function BlogForm({
  form,
  onChange,
  onSubmit,
  loading = false,
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="max-w-3xl mx-auto space-y-6"
    >
      <input
        type="text"
        name="title"
        placeholder="Blog title"
        value={form.title}
        onChange={onChange}
        className="w-full bg-black border border-neutral-800 px-4 py-2 text-white"
      />

      <textarea
        name="excerpt"
        placeholder="Short excerpt"
        value={form.excerpt}
        onChange={onChange}
        rows={3}
        className="w-full bg-black border border-neutral-800 px-4 py-2 text-white"
      />

      <textarea
        name="content"
        placeholder="Write your story..."
        value={form.content}
        onChange={onChange}
        rows={10}
        className="w-full bg-black border border-neutral-800 px-4 py-2 text-white"
      />

      <button
        disabled={loading}
        className="px-6 py-2 bg-white text-black font-medium hover:opacity-90"
      >
        {loading ? "Saving..." : "Publish"}
      </button>
    </form>
  );
}
