import { RequestHandler } from "express";

const getRoot: RequestHandler = (req, res) => {
  return res.send(`
    <h1>APIs cho từ điển tiếng Việt</h1>
    <a href="./api/v1/dictionary">/api/v1/dictionary</a>
    <span>Lấy hết từ</span>
    <ul>
    <li>
    <a href="./api/v1/dictionary?q=shuffle">/api/v1/dictionary?q=shuffle</a>
    <span>Lấy hết từ và trộn chúng</span>
    </li>
    <li>
    <a href="./api/v1/dictionary?min=4">/api/v1/dictionary?min=4</a>
    <span>Lấy từ có tối thiểu 4 chữ</span>
    </li>
    <li>
    <a href="./api/v1/dictionary?max=1">/api/v1/dictionary?max=1</a>
    <span>Lấy từ có tối đa 1 chữ</span>
    </li>
    </ul>
    <br/>
    <a href="./api/v1/dictionary/randomWord">/api/v1/dictionary/randomWord</a>
    <span>Lấy 1 từ ngẫu nhiên từ từ điển</span>
    <br/>
    <a href="./api/v1/dictionary/hasWord?q=chào">/api/v1/dictionary/hasWord?q=chào</a>
    <span>Kiểm tra 1 từ có trong từ điển</span>
    <br/>
    `);
};

export { getRoot };
