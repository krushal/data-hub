const colors: Record<string, string> = {
  Fresh: "green",
  Stale: "orange",
  Unknown: "gray",
};

const Badge = ({ status }: { status: string }) => (
  <span style={{ color: "white", background: colors[status], padding: "4px 8px" }}>
    {status}
  </span>
);

export default Badge;
