# LAMBDA

**LAMBDA** - Ứng dụng phát triển vốn từ vựng tiếng Anh. Thay cho cách tiếp cận truyền thống,
người học sẽ được tiếp cận các từ vựng tiếng Anh theo hướng thực tế và tư duy liên kết.

Ứng dụng này là sản phẩm của _**Bài tập lớn lập trình hướng đối tượng : Xây dựng ứng dụng học tiếng Anh bằng Java**_,
môn Lập trình hướng đối tượng, viện Trí tuệ nhân tạo, trường Đại học Công nghệ, Đại học Quốc gia Hà Nội (IAI - UET -
VNU).

----

## Tính năng

### 1. Lambda Dictionary

Bạn cần gì ở một ứng dụng từ điển? Về cơ bản, một ứng dụng từ điển thông thường sẽ cung cấp cho bạn về từ loại,
dịch nghĩa. Đầy đủ hơn thì có thể cung cấp thêm cả ví dụ, phát âm, từ đồng nghĩa, trái nghĩa. Liệu từ vựng tiếng
Anh của bạn có thực sự tiến bộ khi sử dụng từ điển đó không?

Trong tiếng Anh, có rất nhiều từ vựng không đơn giản là dịch ra nghĩa tiếng Việt là xong. Để học được một từ vựng
tiếng Anh, ta phải học chúng qua thật nhiều khía cạnh: tình huống sử dụng, sắc thái nghĩa, phạm vi nghĩa, trường nghĩa,
ngữ cảnh, kết hợp từ, v.v.
Mỗi khía cạnh sẽ được tiếp cận từ nhiều phương thức học khác nhau. Như vậy, để thực sự thành thạo một từ
tiếng Anh, ta cần phải học nhiều hơn những thứ có trong mấy ứng dụng từ điển Anh - Việt hiện tại.

Lambda Dictionary ...

### 2. Lambda Collection

Để học với Lambda Dictionary một cách hiệu quả hơn, bạn hãy lưu những từ vừa tra cứu vào trong một bộ sưu tập Lambda,
việc lưu các từ vựng liên quan tới nhau trong một nơi sẽ giúp bạn học từ vựng một cách có tập trung và liên kết hơn.
Không dừng lại ở đó, Lambda Collection được thiết là một công cụ quản lý tiến độ học tập từ vựng của bạn và cho bạn
xem lại sự tiến bộ của mình một cách trực quan.

Những việc bạn có thể làm với một bộ sưu tập sau khi lấp đầy bằng các từ vựng là:

- **Ôn lại từ vựng**: Bạn có thể ôn lại một lượt tất cả các từ vựng mình đã lưu trong bộ sưu tập. Bạn không cần tra
  lại trong Lambda Dictionary, bởi vì giờ đây các từ vựng đã tập trung tại một nơi.
- **Cày điểm thành thạo**: Là một chức năng đi kèm trong mỗi bộ sưu tập, dựa trên những từ được bạn thêm vào bộ sưu tập
  Lambda Collection sẽ thiết kế cho bạn những câu hỏi phù hợp. Bằng việc trả lời đúng các câu hỏi, bạn sẽ nhận được điểm
  thành thạo, ngược lại
  điểm thành thạo của bạn sẽ mất đi nếu trả lời sai hoặc quá lâu không tiếp xúc với từ. Việc trả lời các câu hỏi này,
  đôi
  khi là một cách tốt để học hơn là những dòng lý thuyết.
- **Quản lý tiến độ trực quan**: Quá trình học của bạn sẽ được ghi chép lại và hiển thị qua những sơ đồ trực quan.
  Nhờ vậy, người học có thể dễ dàng tự đánh giá tiến độ của bản thân trong quá trình học tập.

### 3. Lambda Assistant

Lambda Assistant, một trí tuệ nhân tạo sẽ hỗ trợ bạn rất nhiều trong việc học tiếng Anh. Ứng dụng đã có những mẫu hỏi
sẵn để bạn yêu cầu trợ lý trong một số tác vụ phổ biến. Dưới đây là danh sách các tác vụ mà Lambda Assistant sẽ nhận yêu
cầu từ người dùng:

| Tác vụ có sẵn   | Chức năng                                                      |
|-----------------|----------------------------------------------------------------|
| Dịch Anh - Việt | Dịch một cụm từ hoặc một đoạn văn từ tiếng Anh sang tiếng Việt |
| Dịch Việt - Anh | Dịch một cụm từ hoặc một đoạn văn từ tiếng Việt sang tiếng Anh |
| Tìm đồng nghĩa  | Tìm từ đồng nghĩa và nêu ra điểm giống và khác nhau            |

### 4. Lambda Profile

----

## Một số hình ảnh về ứng dụng

![alt](/AppGuideline/start-screen.png)
<div style="text-align:center">Màn hình đầu tiên xuất hiện khi bạn khởi động ứng dụng. <br/> Chọn bất kỳ một hồ sơ hoặc tạo hồ sơ mới để bắt đầu học!</div>
<br/><br/>

![alt](AppGuideline/main-screen.png)
<div style="text-align:center">Màn hình chính của ứng dụng. Tất cả tính năng của ứng dụng được trình bày hết tại đây.</div>
<br/><br/>

![alt](AppGuideline/main-screen-features.png)
<div style="text-align:center">Ứng dụng có 3 tính năng chính: Từ điển, Bộ sưu tập, Trợ lý.</div>
<br/><br/>

![alt](/AppGuideline/dictionary-blank-screen.png)
Đây là màn hình chính của tính năng từ điển. Hãy gõ bất kỳ từ gì để tìm kiếm!
<br/><br/>

![alt](/AppGuideline/dictionary-search.png)
Khi gõ, các gợi ý sẽ hiện ra. Bạn có thể dùng chuột hoặc phím mũi tên để chọn từ muốn tra cứu.
<br/><br/>

![alt](AppGuideline/dictionary-result-screen.png)
Nhấn chuột hoặc Enter, kết quả từ vựng sẽ hiện ra
<br/><br/>

![alt](AppGuideline/dictionary-result-screen-2.png)
Kéo xuống để xem toàn bộ thông tin về từ vựng: giải mã, ví dụ, từ liên quan, v.v.
<br/><br/>

![alt](AppGuideline/dictionary-result-relatedwords.png)
Nhấn vào một từ liên quan, bạn sẽ biết được sự giống và khác nhau giữa hai từ vựng.
<br/><br/>

![alt](AppGuideline/dictionary-result-addtocollection.png)
Nếu bạn quan tâm đến từ này, hãy thêm chúng vào bộ sưu tập của mình.
<br/><br/>

![alt](AppGuideline/sidebar-dictionary-result-screen.png)
Thanh bên được tạo ra để thuận tiện trong việc chuyển đổi giữa các tính năng.<br/>
Hãy chọn tính năng Bộ sưu tập để truy các bộ sưu tập thôi nào.
<br/><br/>

![alt](AppGuideline/collection-screen.png)
Đây là màn hình chính của bộ sưu tập, gồm bộ sưu tập chung và bộ sưu tập cá nhân. <br/>
Bấm vào một bộ sưu tập, màn hình sẽ kéo xuống và hiện ra thông tin của bộ sưu tập đó.
<br/><br/>

![alt](AppGuideline/collection-info-screen.png)
Ta có thể quản lý tiến độ học của mình thông qua một bộ sưu tập.
<br/><br/>

![alt](AppGuideline/collection-createcollection.png)
Với mỗi hồ sơ, ta có thể tạo không giới hạn các bộ sưu tập.
<br/><br/>

![alt](AppGuideline/collection-deleteword.png)
Thêm vào được thì cũng phải xóa được.
<br/><br/>

![alt](AppGuideline/collection-revision.png)
Chức năng cơ bản của bộ sưu tập là cho phép xem lại tất cả từ vựng cùng nơi.
<br/><br/>

![alt](AppGuideline/mastering-start.png)
Với mỗi bộ sưu tập, hệ thống sẽ thiết kế ra những câu hỏi phù hợp với hồ sơ hiện tại.
<br/><br/>

![alt](AppGuideline/mastering-question.png)
Câu hỏi ở dạng trắc nghiệm, có thể có hai, bốn hoặc sáu lựa chọn, thậm chí là nhiều hơn.
<br/><br/>

![alt](AppGuideline/mastering-question-increase.png)
Trả lời đúng có thể tăng độ thành thạo.<br/>
Một câu hỏi có thể có nhiều đáp án đúng, nhưng độ thành thạo nhận được là khác nhau.
<br/><br/>

![alt](AppGuideline/mastering-question-decrease.png)
Trả lời sai có thể bị giảm độ thành thạo.<br/>
Có đáp án giảm ít, có đáp án giảm nhiều, hoặc nếu câu hỏi khó hơn so với trình độ thì không giảm.<br/>
Bạn có thể chọn bỏ qua câu khó, hoặc kết thúc phần làm bài.
<br/><br/>

![alt](AppGuideline/mastering-question-result.png)
Một thống kê nhỏ hiện ra khi bạn làm xong.
<br/><br/>

![alt](AppGuideline/assistant-blank-screen.png)
Tính năng trợ lý sẽ giúp bạn học tập nâng cao hơn.
<br/><br/>

![alt](AppGuideline/assistant-prompt-menu.png)
Có một số mẫu lệnh mà trợ lý có thể hiểu được.
<br/><br/>

![alt](AppGuideline/assistant-answer.png)
<br/>Trợ lý sẽ suy nghĩ một lúc, sau đó đưa ra câu trả lời hợp lý nhất.



----

## Phát triển ứng dụng

### 1. Công nghệ

Ứng dụng Lambda là một ứng dụng web được phát triển dựa trên Spring Framework.

| Phần                             | Ngôn ngữ         | Công nghệ / thư viện sử dụng                  | Mô tả                                                                                                                           |
|----------------------------------|------------------|-----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| Cơ sở dữ liệu<br/>(Database)     | HQL              | Spring Boot, Hibernate, MySQL                 | Sử dụng MySQL để quản lý CSDL; sử dụng ngôn ngữ HQL để thao tác với CSDL                                                        |
| Logic chương trình<br/>(Backend) | Java             | Spring Boot <br/> (Java SDK 22)               | Sử dụng Java để lấy dữ liệu từ CSDL, xử lý logic rồi gửi tới giao diện và ngược lại.                                            |
| Giao diện<br/>(Frontend)         | TypeScript, CSS  | ReactJS, FramerMotion, ChakraUI, ChartJS      | Sử dụng React và các thư viện phụ trợ để thiết kế giao diện                                                                     | 
| Kết nối Backend và Frontend      | Java, TypeScript | Hilla Spring                                  | Thư viện Hilla Spring tiến hành tái tạo các phương thức Java sang TypeScript, giúp frontend và backend trở nên tương thông hơn. |
| API                              | TypeScript       | Google Gemini API <br/> Oxford Dictionary API | Sử dụng API để bổ sung và làm phong phú thêm các chức năng có trong ứng dụng.                                                   |

### 2. Người phát triển

- **Lâm Đức Anh**, _23020326_, lớp AI2 - K68, viện Trí tuệ nhân tạo, trường Đại học Công nghệ, Đại học Quốc gia Hà Nội.

### 3. Phát triển dữ liệu

Ứng dụng Lambda tự thiết kế CSDL riêng để phù hợp với dự án này. Mọi dữ liệu, bao gồm các từ vựng, câu hỏi đều được biên
soạn
thủ công rồi đưa vào cơ sở dữ liệu. Điều này không có vấn đề gì bởi trong thực tế, các dữ liệu như này muốn có sự chất
lượng
đều cần có sự kiểm duyệt của đội ngũ chuyên môn. Do vậy, ứng dụng còn chứa thêm một ứng dụng bí mật hỗ trợ việc cập nhật
từ
cũng như bổ sung các câu hỏi mới.


