#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { SlackAutoStampBotStack } from '../lib/slack-auto-stamp-bot-stack';

const app = new cdk.App();
new SlackAutoStampBotStack(app, 'SlackAutoStampBotStack');
