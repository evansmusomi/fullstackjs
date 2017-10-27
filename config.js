const env = process.env;

export const nodeEnv = env.nodeEnv || 'development'

export default {
    port: env.port || 8080,
    host: env.HOST || '0.0.0.0',
    get serverUrl(){
        return `http://${this.host}:${this.port}`;
    }

};