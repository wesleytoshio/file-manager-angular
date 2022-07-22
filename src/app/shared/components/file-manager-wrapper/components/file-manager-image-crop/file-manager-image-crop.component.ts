import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';
import { FileManagerService } from 'src/app/shared/services/file-manager.service';
import { filter } from 'rxjs/operators';
import { FileManagerEventTarget, FileManagerEventType } from 'src/app/shared/interfaces/file-manager-event.interface';
@Component({
  selector: 'file-manager-image-crop',
  templateUrl: './file-manager-image-crop.component.html',
  styleUrls: ['./file-manager-image-crop.component.scss']
})
export class FileManagerImageCrop implements OnInit {
  cropImgPreview: any = '';
  imageChangedEvent?: any;
  imageBase64?: string;
  transform: ImageTransform = {};
  canvasRotation = 0;
  rotation = 0;
  scale = 1;
  constructor(private fileManagerService: FileManagerService) {

  }
  ngOnInit(): void {
    this.fileManagerService.event
      .pipe(filter(val => val.target === FileManagerEventTarget.TO_CROP))
      .subscribe(event => {
        this.fileToDataURL(event.data).then(base64 => {
          this.imageBase64 = base64;
        });

      })


  }
  onSave() {
    this.fileManagerService.emit({
      data: this.dataURLtoFile(this.cropImgPreview),
      type: FileManagerEventType.UPLOAD,
      target: FileManagerEventTarget.TO_LIST_FILES,
    });
  }

  onSkip() {
    this.fileManagerService.emit({
      data: this.dataURLtoFile(this.imageBase64),
      type: FileManagerEventType.UPLOAD,
      target: FileManagerEventTarget.TO_LIST_FILES,
    });
  }


  cropImg(e: ImageCroppedEvent) {
    this.cropImgPreview = e.base64;
  }
  imgLoad() {
    // display cropper tool
  }
  initCropper() {
    // init cropper
  }

  imgFailed() {
    // error msg
  }

  flipHorizontal() {
    this.transform = {
      ...this.transform,
      flipH: !this.transform.flipH
    };
  }

  flipVertical() {
    this.transform = {
      ...this.transform,
      flipV: !this.transform.flipV
    };
  }

  resetImage() {
    this.scale = 1;
    this.rotation = 0;
    this.canvasRotation = 0;
    this.transform = {};
  }

  zoomOut() {
    this.scale -= .1;
    this.transform = {
      ...this.transform,
      scale: this.scale
    };
  }

  zoomIn() {
    this.scale += .1;
    this.transform = {
      ...this.transform,
      scale: this.scale
    };
  }

  fileToDataURL(file: any): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result?.toString() || '');
      reader.onerror = error => reject(error);
    })
  }
  dataURLtoFile(dataurl: any) {
    var filename = 'helo.png';
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }
}