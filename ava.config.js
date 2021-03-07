export default {
	verbose: true,
	files: ['**/*.test.[jt]s'],
	require: ['ts-node/register', './src/__test__/bootstrap.ts'],
	timeout: '1m',
	failFast: true,
	nodeArguments: ['--loader=ts-node/esm', '--experimental-specifier-resolution=node'],
	extensions: {
		ts: 'module',
	},
	nonSemVerExperiments: {
		configurableModuleFormat: true,
	},
}
