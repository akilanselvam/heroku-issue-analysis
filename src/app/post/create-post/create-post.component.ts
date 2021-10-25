import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { SubissuesModel } from 'src/app/subissues/subissues-response';
import { Router } from '@angular/router';
import { PostService } from 'src/app/shared/post.service';
import { SubissuesService } from 'src/app/subissues/subissues.service';
import { throwError } from 'rxjs';
import { CreatePostPayload } from './create-post.payload';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  createPostForm: FormGroup;
  postPayload: CreatePostPayload;
  subissuess: Array<SubissuesModel>;

  constructor(private router: Router, private postService: PostService,
    private subissuesService: SubissuesService) {
    this.postPayload = {
      postName: '',
      url: '',
      description: '',
      subissuesName: ''
    }
  }

  ngOnInit() {
    this.createPostForm = new FormGroup({
      postName: new FormControl('', Validators.required),
      subissuesName: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
    this.subissuesService.getAllSubissuess().subscribe((data) => {
      this.subissuess = data;
    }, error => {
      throwError(error);
    });
  }

  createPost() {
    this.postPayload.postName = this.createPostForm.get('postName').value;
    this.postPayload.subissuesName = this.createPostForm.get('subissuesName').value;
    this.postPayload.url = this.createPostForm.get('url').value;
    this.postPayload.description = this.createPostForm.get('description').value;

    this.postService.createPost(this.postPayload).subscribe((data) => {
      this.router.navigateByUrl('/');
    }, error => {
      throwError(error);
    })
  }

  discardPost() {
    this.router.navigateByUrl('/');
  }

}