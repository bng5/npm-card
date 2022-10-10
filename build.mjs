'use strict'

// Pull in our modules
import chalk from 'chalk'
import boxen from 'boxen';
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('           Pablo Bangueses'),
  handle: chalk.white('bng5'),
  work: chalk.white('Software Developer at Element14 (https://www.e14.io/)'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('bng5'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~bng5'),
  github: chalk.gray('https://github.com/') + chalk.green('bng5'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('pablobngs'),
  web: chalk.cyan('https://bng5.net/'),
  npx: chalk.red('npx') + ' ' + chalk.white('@bng5/card'),
  labelWork: chalk.white.bold('    Work:'),
  labelTwitter: chalk.white.bold(' Twitter:'),
  labelnpm: chalk.white.bold('     npm:'),
  labelGitHub: chalk.white.bold('  GitHub:'),
  labelLinkedIn: chalk.white.bold('LinkedIn:'),
  labelWeb: chalk.white.bold('     Web:'),
  labelCard: chalk.white.bold('    Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${chalk.green('/')} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = [
  heading, // data.name + data.handle
  '', // Add one whole blank line
  working, // data.labelWork + data.work
  twittering, // data.labelTwitter + data.twitter
  npming, // data.labelnpm + data.npm
  githubing, // data.labelGitHub + data.github
  linkedining, // data.labelLinkedIn + data.linkedin
  webing, // data.labelWeb + data.web
  '',
  carding, // data.labelCard + data.npx
].join(newline);

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))

console.log(chalk.green(boxen(output, options)))
