const size = {
	xs: '320px',
	sm: '800px',
	lg: '1200px',
};
const device = {
	xs: `(min-width: ${size.xs})`,
	sm: `(min-width: ${size.sm})`,
	lg: `(min-width: ${size.lg})`,
};
// eslint-disable-next-line import/no-anonymous-default-export
export default { size, device };
