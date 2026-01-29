import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-media.html',
  styleUrl: './social-media.css',
})
export class SocialMedia {
  open = false;
}
