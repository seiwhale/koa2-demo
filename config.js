/**
 * 数据库配置文件
 * @type {{port: number, database: {DATABASE: string, USERNAME: string, PASSWORD: string, PORT: string, HOST: string}}}
 */
const config = {
  port: 3001,
  database: {
    DATABASE: 'koa_demo',
    USERNAME: 'root',
    PASSWORD: '123456',
    PORT: '3306',
    HOST: 'localhost'
  }
};

module.exports = config;