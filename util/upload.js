// const fs = require('fs')
const path = require('path')
const readdir = require('recursive-readdir')
const COS = require('cos-nodejs-sdk-v5')
const util = require('util')
const fs = require('fs')

const region = 'ap-beijing'
const htmlBucket = 'html-1258401619'
const assetsBucket = 'assets-1258401619'
const secretId = 'AKIDVs11mJlHxZy85mGWVJ1XpwqX1FG7iY8U'
const secretKey = 'HMCpxrVw98sMchZCbnmW0GMM8fy5xZxA'
const cos = new COS({
  SecretId: secretId,
  SecretKey: secretKey,
})

// 将 HTML 文件上传到对象存储，将其他文件上传到 CDN
;(async () => {
  try {
    const distPath = path.join(__dirname, '..', 'dist')
    const files = await readdir(distPath)
    const htmlFiles = files.filter(file => file.endsWith('.html'))
    const assetsFiles = files.filter(file => !file.endsWith('.html'))
    const uploadHtmlPromise = htmlFiles.map(file => {
      return uploadToCOS({
        cos,
        region,
        bucket: htmlBucket,
        key: path.relative(distPath, file),
        file,
      })
    })
    const uplaodAssetsPromise = assetsFiles.map(file => {
      return uploadToCOS({
        cos,
        region,
        bucket: assetsBucket,
        key: path.relative(distPath, file),
        file,
      })
    })
    const results = await Promise.all(uploadHtmlPromise.concat(uplaodAssetsPromise))
    const htmlPath = results.filter(result => result.Location.endsWith('.html'))
    console.log(`上传成功，点击：${htmlPath[0].Location}`)
  } catch (err) {
    console.log(err)
  }
})()

const uploadToCOS = async payload => {
  const { cos, region, bucket, key, file } = payload
  const promisFun = util.promisify(cos.putObject)
  return promisFun.call(cos, {
    Bucket: bucket,
    Region: region,
    Key: key,
    Body: fs.createReadStream(file),
  })
}
