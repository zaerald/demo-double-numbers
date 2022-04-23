<h1 align="center">Double Numbers Demo</h1>

Please check the [REQUIREMENTS.md](./REQUIREMENTS.md) to review the goal of this project.

## Getting Started

## Tools

- Node v17
- npm for dependencies

## Running Locally

### npm
```shell
npm install && npm start
```

## Running Tests

```shell
npm test
```

## Assumptions

- A non-number data type will just result in `NaN`. So we can still display an output to the user.
  - Input: `1,zzz,2,3`
  - Output: `2,NaN,4,6`
- An empty number will result in `0`.
  - Input: `1,,2`
  - Output: `2,0,4`

