module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'chore',
        'ci',
        'build',
        'feat',
        'fix',
        'docs',
        'style',
        'perf',
        'refactor',
        'test',
        'revert',
      ],
    ],
    'scope-enum': [2, 'always', ['pf']],
  },
}
