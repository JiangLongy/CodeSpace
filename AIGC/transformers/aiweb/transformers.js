import { pipeline, env } 
    from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.6.0'
env.allowLocalModels = false;
const fileUpload = document.getElementById('file-upload');
const imageContainer = document.getElementById('image-container');
const status = document.getElementById('status');

status.textContent = '加载模型...'
// linux pipe 管道
const detector = await pipeline("object-detection",
"Xenova/detr-resnet-50");

status.textContent = '准备'
fileUpload.addEventListener('change', async (e) => {
});