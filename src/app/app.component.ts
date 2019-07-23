import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

  userList = [
  {
    id: 0,
    name: "Nguyễn Phú Trọng",
    image: "https://wikicachlam.com/wp-content/uploads/2019/01/anh-anime-boy-3.jpg",
    age: 65,
    like: 0,
    dislike: 0
  },
  {
    id: 1,
    name: "Trung Trọng Phú",
    image: "https://wikicachlam.com/wp-content/uploads/2019/01/anh-anime-boy-3.jpg",
    age: 58,
    like: 0,
    dislike: 0
  },
  {
    id: 2,
    name: "Luyện Văn Ngáo",
    image: "https://wikicachlam.com/wp-content/uploads/2019/01/anh-anime-boy-3.jpg",
    age: 48,
    like: 0,
    dislike: 0
  },
  {
    id: 3,
    name: "Tiền Văn Đình",
    image: "https://wikicachlam.com/wp-content/uploads/2019/01/anh-anime-boy-3.jpg",
    age: 39,
    like: 0,
    dislike: 0
  },
  {
    id: 4,
    name: "Láo Ngọc Thuẫn",
    image: "https://wikicachlam.com/wp-content/uploads/2019/01/anh-anime-boy-3.jpg",
    age: 40,
    like: 0,
    dislike: 0
  },
  ];

  DislikeUser(id){
    var index = this.userList.map((h) =>h.id).indexOf(id);
    console.log(index);
    this.userList[index].dislike += 1;
  }
  LikeUser(id){
    var index = this.userList.map((h) =>h.id).indexOf(id);
    console.log(index);
    this.userList[index].like += 1;
  }
}
