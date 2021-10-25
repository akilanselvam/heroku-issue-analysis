import { Component, OnInit } from '@angular/core';
import { SubpoService } from '../subpo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PostModel } from 'src/app/shared/post-model';
import { PostService } from 'src/app/shared/post.service';
@Component({
  selector: 'app-subposts',
  templateUrl: './subposts.component.html',
  styleUrls: ['./subposts.component.css']
})
export class SubpostsComponent implements OnInit {
  public posts =[];
  postId: number;
  term;
  post: PostModel[];
  postLength: number;
  postsLength: number;
  
  constructor(private _http:SubpoService,private activateRoute: ActivatedRoute,private router: Router,private postService: PostService) { 
    this.postId = this.activateRoute.snapshot.params.id;
  
    this.postService.getAllPosts().subscribe(data => {
      this.post = data;
      this.postLength = data.length;
    });
  
  }
  
  ngOnInit() {
    
    this._http.getAPIData(this.postId).subscribe(data => {this.posts =data;this.postsLength=data.length});
  }
  goToPost(id: number): void {
    this.router.navigateByUrl('/view-post/' + id);
  }

}
