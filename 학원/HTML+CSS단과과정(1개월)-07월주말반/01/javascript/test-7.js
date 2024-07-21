document.write(`
    <table class="js_tb4">
        <caption>
            <h2><mark>colgroup태그 연습</mark></h2>
        </caption>
        <colgroup>
            <col style="background-color: #ccc;">
            <col style="background-color: yellow;">
            <col>
            <col style="background-color: green;">
        </colgroup>
        <tbody>
            <tr>
                <th>제목1</th>
                <td>1행 2열</td>
                <td>1행 3열</td>
                <td class="col4">1행 4열</td>
            </tr>
            <tr>
                <th>제목2</th>
                <td>2행 2열</td>
                <td>2행 3열</td>
                <td class="col4">2행 4열</td>
            </tr>
            <tr>
                <th>제목3</th>
                <td>3행 2열</td>
                <td>3행 3열</td>
                <td class="col4">3행 4열</td>
            </tr>
            <tr>
                <th>제목4</th>
                <td>4행 2열</td>
                <td>4행 3열</td>
                <td class="col4">4행 4열</td>
            </tr>
        </tbody>
    </table>
    `)