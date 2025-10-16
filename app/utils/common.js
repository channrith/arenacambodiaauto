export const groupSpecsByLabel = (specs) => {
  const grouped = specs.reduce((acc, spec) => {
    const existing = acc.find((item) => item.label === spec.label);
    if (existing) {
      existing.values.push(spec.value);
    } else {
      acc.push({ label: spec.label, values: [spec.value] });
    }
    return acc;
  }, []);
  return grouped;
};
