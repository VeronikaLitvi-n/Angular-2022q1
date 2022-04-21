import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeModule } from '../../youtube/youtube.module';
import { YoutubeInterceptor } from '../../core/interceptors/youtube.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule, YoutubeModule, YoutubeInterceptor],
})
export class LayoutModule {}
