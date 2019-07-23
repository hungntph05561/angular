import { Component, OnInit, Input,
	Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

		@Input() user: any;
		@Output() Dislike = new EventEmitter<any>();
		@Output() Like = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

		DislikeUser(userId){
			this.Dislike.emit(userId);
		}

		LikeUser(userId){
			this.Like.emit(userId);
		}
	

}
