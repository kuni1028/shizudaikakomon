function search() {
    let input = document.getElementById("search-box").value.trim().toLowerCase(); 
    let examList = document.getElementById("exam-list");
    let exams = examList.getElementsByTagName("li");

    let matchedExams = []; // 検索にヒットした要素を格納

    for (let i = 0; i < exams.length; i++) {
        let link = exams[i].getElementsByTagName("a")[0];
        let examText = link.textContent.toLowerCase();

        // 検索キーワードをスペース区切りで分割し、すべての単語が含まれる場合にマッチとする
        let keywords = input.split(" ");
        let isMatch = keywords.every(keyword => examText.includes(keyword));

        if (isMatch) {
            exams[i].style.display = ""; // 一致する場合は表示
            matchedExams.push(link.href); // リンクを保存
        } else {
            exams[i].style.display = "none"; // 非表示
        }
    }

    // 検索ヒットが1件だけなら、自動的にページへ飛ぶ
    if (matchedExams.length === 1) {
        window.location.href = matchedExams[0];
    } else if (matchedExams.length === 0) {
        alert("該当する過去問が見つかりませんでした。");
    }
}

