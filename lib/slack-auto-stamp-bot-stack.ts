import * as cdk from '@aws-cdk/core'
import * as lambda from '@aws-cdk/aws-lambda'

export class SlackAutoStampBotStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props)

        const stampBotFunctionProps: lambda.FunctionProps = {
            runtime: lambda.Runtime.RUBY_2_7,
            code: lambda.Code.fromAsset('lambda/stamp-bot-function'),
            handler: 'app.handler'
        }
        const stampBotFunction = new lambda.Function(this, 'stampBotFunction', stampBotFunctionProps)
    }
}
