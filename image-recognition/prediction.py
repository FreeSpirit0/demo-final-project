import numpy as np
from PIL import Image
from io import BytesIO
import tensorflow as tf
from keras.applications.imagenet_utils import decode_predictions

input_shape = (224,224)
def load_model():
    model = tf.keras.applications.MobileNetV2(input_shape)
    return model
_model = load_model()

def read_imagefile(file) -> Image.Image:
    image = Image.open(BytesIO(file))
    return image

def preprocess(image:Image.Image):
    image = image.resize(input_shape)
    image = np.asfarray(image)
    image = image / 127.5 - 1.0
    image = np.expand_dims(image,0)
    return image

def predict(image: Image.Image):
    global model
    if model is None:
        model = load_model()
    image = np.asarray(image.resize((224, 224)))[..., :3]
    image = np.expand_dims(image, 0)
    image = image / 127.5 - 1.0
    result = decode_predictions(model.predict(image), 2)[0]
    response = []
    for i, res in enumerate(result):
        resp = {}
        resp["class"] = res[1]
        resp["confidence"] = f"{res[2]*100:0.2f} %"
        response.append(resp)
    return response