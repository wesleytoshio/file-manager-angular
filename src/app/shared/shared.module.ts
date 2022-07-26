import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileManagerList } from './components/file-manager-list/file-manager-list.component';
import { FileManagerPreview } from './components/file-manager-preview/file-manager-preview.component';
import { FileManagerSideMenuFolder } from './components/file-manager-side-menu/components/file-manager-side-menu-folder/file-manager-side-menu-folder.component';
import { FileManagerWrapper } from './components/file-manager-wrapper/file-manager-wrapper.component';
import { FileManagerHeader } from './components/file-manager-header/file-manager-header.component';
import { FileManagerContent } from './components/file-manager-content/file-manager-content.component';
import { DropDragDirective } from './directives/drop_drag';
import { FileManagerUpload } from './components/file-manager-upload/file-manager-upload.component';
import { FileManagerUploadFiles } from './components/file-manager-upload/components/file-manager-upload-files/file-manager-upload-files.component';
import { FileManagerUploadSelect } from './components/file-manager-upload/components/file-manager-upload-select/file-manager-upload-select.component';
import { FileManagerUploadFolder } from './components/file-manager-upload/components/file-manager-upload-folder/file-manager-upload-folder.component';
import { FileManagerImageCrop } from './components/file-manager-wrapper/components/file-manager-image-crop/file-manager-image-crop.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { FormFolder } from './components/file-manager-header/components/form-folder/form-folder.component';
import { FileManagerNavbar } from './components/file-manager-header/components/file-manager-navbar/file-manager-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileManagerSideMenu } from './components/file-manager-side-menu/file-manager-side-menu.component';


@NgModule({
    imports: [CommonModule,
        ImageCropperModule, NgbModule, ReactiveFormsModule],
    declarations: [FileManagerWrapper,

        FileManagerSideMenuFolder,
        FileManagerList,
        FileManagerPreview,
        FileManagerHeader,
        FileManagerContent,
        DropDragDirective,
        FileManagerUpload,
        FileManagerUploadFiles,
        FileManagerUploadSelect,
        FileManagerUploadFolder,
        FileManagerImageCrop,
        FormFolder,
        FileManagerNavbar, FileManagerSideMenu

    ],
    exports: [FileManagerWrapper, FileManagerSideMenu, FileManagerSideMenuFolder, FileManagerList, FileManagerPreview,
        CommonModule, FormsModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class SharedModule { }