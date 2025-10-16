import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import type { Express } from 'express';
import { PdfService } from './pdf.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadPdf(@UploadedFile() file: Express.Multer.File): Promise<unknown> {
    return this.pdfService.processPdf(file);
  }
}
