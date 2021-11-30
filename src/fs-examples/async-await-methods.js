import fsBase from 'fs';
const fs = fsBase.promises;
import path from 'path';

// const execute = async () => {
//   const data = await fs.readFile(path.join(__dirname, 'example.txt'), 'utf-8');
//   colorfulLog(data);
// };
// execute();

const execute = async () => {
  await fs.writeFile(path.join(__dirname, 'example.txt'), 'Emirius Magnus');
  const data = await fs.readFile(path.join(__dirname, 'example.txt'), 'utf-8');
  colorfulLog(data);
  await fs.unlink(path.join(__dirname, 'example.txt'));
};
execute();
// const data = fs.readFileSync(path.join(__dirname, 'example.txt'), 'utf-8');
// colorfulLog(data);

// const data = fs.writeFileSync(
//   path.join(__dirname, 'my-new-file.txt'),
//   'Hello Emir',
//   'utf-8'
// );

// fs.appendFileSync(
//   path.join(__dirname, 'my-new-file.txt'),
//   '\nHello Emir',
//   'utf-8'
// );
// fs.appendFileSync(
//   path.join(__dirname, 'my-new-file.txt'),
//   '\nHello Jasmin',
//   'utf-8'
// );

// fs.writeFileSync(
//   path.join(__dirname, 'my-json.json', JSON.stringify({ message: 'Hello!' }))
// );

// fs.unlinkSync(path.join(__dirname, 'my-new-file.txt'));

// fs.mkdirSync(path.join(__dirname, 'my-directory'));
// fs.rmdirSync(path.join(__dirname, 'my-directory'));

// const exists = fs.existsSync(path.join(__dirname, 'exampsle.txt'));
// colorfulLog(exists);

// const contents = fs.readdirSync(__dirname);
// colorfulLog(contents);

// const stats = fs.lstatSync(path.join(__dirname, 'example.txt'));
// colorfulLog(stats.isFile());
// colorfulLog(stats.isDirectory());
