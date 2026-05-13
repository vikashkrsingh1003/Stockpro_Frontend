const [major, minor, patch] = process.versions.node.split(".").map(Number);

const supportsNode =
  (major === 18 && (minor > 19 || (minor === 19 && patch >= 1))) ||
  (major === 20 && (minor > 11 || (minor === 11 && patch >= 1))) ||
  major === 22;

if (!supportsNode) {
  console.error(
    `Unsupported Node ${process.versions.node}. Angular 18 supports Node ^18.19.1, ^20.11.1, or ^22.0.0.`
  );
  console.error("Use Node 22 LTS for this project, then rerun the command.");
  process.exit(1);
}
