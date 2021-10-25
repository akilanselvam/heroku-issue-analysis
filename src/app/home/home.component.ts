import { Component, OnInit } from '@angular/core';
import { PostModel } from '../shared/post-model';
import { PostService } from '../shared/post.service';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/comment/comment.service';
import { CommentPayload } from 'src/app/comment/comment.payload';
import { faArrowUp, faArrowDown, faGlobeAsia, faHeart, faHeartBroken,faTablet,faBell,faMailBulk} from '@fortawesome/free-solid-svg-icons';
import { SubissuesModel } from 'src/app/subissues/subissues-response';
import { SubissuesService } from  'src/app/subissues/subissues.service';
import { throwError } from 'rxjs';
import { faAdn } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})
export class HomeComponent implements OnInit {
  faheart = faHeart;
  faheartbroken = faHeartBroken;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faglobeasia = faGlobeAsia;
  faadn=faTablet;
  fabell=faBell;
  famailbulk=faMailBulk;

  name: string;
  posts: PostModel[];
  comments: CommentPayload[];
  postLength: number;
  commentLength: number;
  post: Array<PostModel> = [];
  displayViewAll: boolean;
  subissuess: Array<SubissuesModel>;
  constructor(private activatedRoute: ActivatedRoute,private postService: PostService,private commentService: CommentService,private subissuesService: SubissuesService) {

    this.postService.getAllPosts().subscribe(data => {
      this.post = data;
      this.postLength = data.length;
    });
    

    this.postService.getAllPosts().subscribe(data => {
      if (data.length > 3) {
    this.posts = data.slice(Math.max(data.length - 2, 1)).reverse();
    
    this.displayViewAll = true;
  } else {
    this.posts = data;
  }
});
}
  ngOnInit() {
    this.subissuesService.getAllSubissuess().subscribe(data => {
      this.subissuess = data;
    }, error => {
      throwError(error);
    })

  }
  

}
