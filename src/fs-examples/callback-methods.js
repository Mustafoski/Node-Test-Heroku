import fs from 'fs';
import path from 'path';

// const data = fs.readFileSync(path.join(__dirname, 'example.txt'), 'utf-8');
// colorfulLog(data);

// fs.readFile(path.join(__dirname, 'example.txt'), 'utf-8', (err, data) => {
//   if (err) {
//     colorfulLog(err);
//   }
//   colorfulLog(data);
// });

// const data = fs.writeFileSync(
//   path.join(__dirname, 'my-new-file.txt'),
//   'Hello Emir',
//   'utf-8'
// );

// const data = fs.writeFile(
//   path.join(__dirname, 'my-new-file.txt'),
//   'Hello Emir',
//   (err, data) => {
//     if (err) colorfulLog(err);
//     colorfulLog('done');
//   }
// );

// fs.appendFileSync(
//   path.join(__dirname, 'my-new-file.txt'),
//   '\nHello Emir',
//   'utf-8'
// );

// fs.appendFile(
//   path.join(__dirname, 'my-new-file.txt'),
//   '\nHello Emir Magnus',
//   (err, data) => {
//     if (err) colorfulLog(err);
//     colorfulLog('done appending to my-new-file.txt');
//   }
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
// fs.unlink(path.join(__dirname, 'my-new-file.txt'), (err) => {
//   if (err) colorfulLog(err);
//   colorfulLog('done deleting my-new-file.txt');
// });

// fs.mkdirSync(path.join(__dirname, 'my-directory'));
// fs.rmdirSync(path.join(__dirname, 'my-directory'));

// const exists = fs.existsSync(path.join(__dirname, 'exampsle.txt'));
// colorfulLog(exists);

// const contents = fs.readdirSync(__dirname);
// colorfulLog(contents);

// const stats = fs.lstatSync(path.join(__dirname, 'example.txt'));
// colorfulLog(stats.isFile());
// colorfulLog(stats.isDirectory());

fs.writeFile(path.join(__dirname, 'example.txt'), 'Hello callbacks', (err) => {
  fs.readFile(path.join(__dirname, 'example.txt'), 'utf-8', (err, data) => {
    if (err) colorfulLog(err);
    colorfulLog(data);

    fs.unlink(path.join(__dirname, 'example.txt'), (err) => {
      if (err) colorfulLog(err);
      colorfulLog('deleting example.txt');
    });
  });
});
