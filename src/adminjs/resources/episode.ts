import path from 'path'
import uploadFileFeature, { AWSProvider } from '@adminjs/upload'
import { FeatureType, ResourceOptions } from 'adminjs'
import aws from 'aws-sdk'

export const episodeResourceOptions: ResourceOptions = {
  navigation: 'Catálogo',
  editProperties: ['name', 'synopsis', 'courseId', 'order', 'uploadVideo', 'secondsLong'  ],
  filterProperties: ['name', 'synopsis', 'courseId', 'secondsLong', 'createdAt', 'updatedAt'],
  listProperties: ['id', 'name', 'courseId', 'order', 'secondsLong'],
  showProperties: ['id', 'name', 'synopsis', 'courseId', 'order', 'videoUrl', 'secondsLong', 'createdAt', 'updatedAt']
}

export const episodeResourceFeatures: FeatureType[] = [
  
  uploadFileFeature({
    provider: {
        /*aws: {
        region: 'us-east-1',
        bucket: path.resolve('bucket-onebitflix-victor')
       }*/
      local: {
        bucket: path.join(__dirname, '../../../uploads')
      }
    },
    properties: {
      key: 'videoUrl',
      file: 'uploadVideo'
    },
    uploadPath: (record, filename) => `videos/course-${record.get('courseId')}/${filename}`
  })
]