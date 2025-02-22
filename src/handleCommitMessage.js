/**
 Copyright 2019 Google LLC

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 https://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 **/
/* eslint-disable no-console */
const {green} = require('chalk');
const fs = require('fs');
const path = require('path');

module.exports = function handleCommitMessage(commitMessage) {
  const CWD = process.cwd();
  try {
    fs.writeFileSync(path.join(CWD, '.git', 'COMMIT_EDITMSG'), commitMessage);
    console.log(green(`Run "git commit -F .git/COMMIT_EDITMSG -e"`));
  } catch (e) {
    // Project is not using git
    console.log(commitMessage);
  }
};
