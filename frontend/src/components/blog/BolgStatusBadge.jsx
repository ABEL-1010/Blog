const STATUS_STYLES = {
  published: "bg-green-500/10 text-green-400 border-green-500/20",
  draft: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  featured: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  trending: "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

export default function BlogStatusBadge({ status }) {
  if (!status) return null;

  return (
    <span
      className={`text-xs px-2 py-0.5 border rounded-full capitalize
        ${STATUS_STYLES[status] || "bg-neutral-800 text-neutral-300 border-neutral-700"}
      `}
    >
      {status}
    </span>
  );
}
