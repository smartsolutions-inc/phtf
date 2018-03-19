'use strict';

// @ADDING DEPENDENCIES
// # setting up express
const express        = require('express');
const expresslayouts = require('express-layouts');
const app = express();

// # setting up dependencies
const path     = require('path');
const mongoose = require('mongoose');
const morgan   = require('morgan');
