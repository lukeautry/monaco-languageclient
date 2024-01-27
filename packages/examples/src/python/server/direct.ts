/* --------------------------------------------------------------------------------------------
 * Copyright (c) 2024 TypeFox GmbH (http://www.typefox.io). All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import { resolve } from 'path';
import { runPythonServer } from './main.js';
import { getLocalDirectory } from '../../utils/fs-utils.js';

const baseDir = resolve(getLocalDirectory(import.meta.url));

// lukea: old path was ../../../../.. -> this pointed to the project root where pyright is not a dependency
// this may have only ever worked because devs had pyright installed in their root node_modules
const relativeDir = '../../../node_modules/pyright/dist/pyright-langserver.js';
runPythonServer(baseDir, relativeDir);
