# YOLOv5 Object Detection, Simone Piccinini 

This notebook demonstrates how to set up and use YOLOv5 for object detection tasks. 

## What is YOLOv5?


YOLO is an acronym for **“You Only Look Once”** and it has that name because this is a real-time object detection algorithm that processes images very fast.
It is a single-stage object detector that uses a convolutional neural network (CNN) to predict the bounding boxes and class probabilities of objects in input images.


## How Does it works? **_reference_** [Yolo how does it works](https://kili-technology.com/data-labeling/machine-learning/yolo-algorithm-real-time-object-detection-from-a-to-z).

### The basic idea behind YOLO is to divide the input image into a grid of cells and, for each cell, predict the probability of the presence of an object and the bounding box coordinates of the object. The process of YOLO can be broken down into several steps:

1. Input image is passed through a CNN to extract features from the image.

2. The features are then passed through a series of fully connected layers, which predict ‌class probabilities and bounding box coordinates.

3. The image is divided into a grid of cells, and each cell is responsible for predicting a set of bounding boxes and class probabilities.

4. The output of the network is a set of bounding boxes and class probabilities for each cell.

5. The bounding boxes are then filtered using a post-processing algorithm called non-max suppression to remove overlapping boxes and choose the box with the highest probability.

6. The final output is a set of predicted bounding boxes and class labels for each object in the image.

One of the key advantages of YOLO is that it processes the entire image in one pass, making it faster and more efficient than two-stage object detectors such as R-CNN and its variants.


![](https://a.storyblok.com/f/139616/1200x800/297c23f45f/structure-of-yolo.webp)


## CPU-Based Processing Explanation

In this project, CUDA is not utilized because the current system is equipped with an AMD GPU, specifically I have the RADEON RX 470, which does not support CUDA because it's specifically designed for NVIDIA GPUs.

CUDA, is a parallel computing platform developed by NVIDIA that is exclusive to NVIDIA GPUs. As a result, the deep learning framework, PyTorch, will default to using the CPU for all computations. While this may result in slower processing times compared to utilizing a CUDA-compatible GPU.
Regardless of the use of the CPU the functionality and accuracy of the object detection tasks performed by YOLOv5 remain unaffected.

The results you are going to see are based using the CPU: Intel(R) Core(TM) i5-9400F CPU, 2.90 GHz


## 1. Install and Import Dependencies

First, we need to install the required libraries: `torch`, `torchvision`, `torchaudio`, and clone the YOLOv5 repository. 
We also need to install the dependencies specified in the YOLOv5 repository.

```python
!pip install torch torchvision torchaudio
!git clone https://github.com/ultralytics/yolov5
!cd yolov5 && pip install -r requirements.txt

```

## 2. Import Necessary Libraries

We will import the required libraries for our task. These include `torch` for loading the YOLOv5 model, `matplotlib` for displaying images, `numpy` for numerical operations, and `cv2` from OpenCV for handling image and video data.

```python
import torch
from matplotlib import pyplot as plt
import numpy as np
import cv2

```

# 3. Load YOLOv5 Model

We load the pre-trained YOLOv5 model using the PyTorch Hub API. The model will be downloaded and cached for future use.

```python
model = torch.hub.load('ultralytics/yolov5', 'yolov5s')
model
```

The output indicates that the YOLOv5s model has been successfully loaded. The model summary shows its architecture, number of layers, parameters, and other details.


# 4. Classes

You can list all the class names that the YOLOv5 model can recognize running this cell.

```python
model = torch.hub.load('ultralytics/yolov5', 'yolov5s')

class_names = model.names
print(class_names)

```

# 5. Perform Object Detection on an Image

We will use the loaded YOLOv5 model to perform object detection on a sample image from a URL.

```python
# URL of the image
img_url = 'https://ilfattoalimentare.it/wp-content/uploads/2015/06/supermercato-spesa-06photo-fotolia-750.jpg'

# Perform inference
results = model(img_url)

# Print results
results.print()

# Display image with results
%matplotlib inline
plt.imshow(np.squeeze(results.render()))
plt.show()

```


The above code fetches an image from the provided URL, performs inference using the YOLOv5 model, prints the detection results, and displays the image with detected objects.

## Result

If the image has been correctly processed, you will see each detected object enclosed in a rectangle (**Bounding Box**). On top of this box, there is a **Class Label** that represents the name of the class, along with a **Confidence Score** that indicates the percentage confidence level of the model in its prediction.


# 6. Real-Time Object Detection Using Webcam

Finally, we perform real-time object detection using a webcam. We capture frames from the webcam, run inference on each frame, and display the results in real-time.


```python

# Load YOLOv5 model
model = torch.hub.load('ultralytics/yolov5', 'yolov5s')

# Initialize webcam
cap = cv2.VideoCapture(1) # change this number if the script can't find your webcam

# Check if webcam is opened correctly
if not cap.isOpened():
    raise IOError("Cannot open webcam")

while True:
    ret, frame = cap.read()
    if not ret:
        print("Failed to capture image")
        break

    print(f"Captured frame shape: {frame.shape}, dtype: {frame.dtype}")

    try:
        # Perform inference on the frame
        results = model(frame)

        # Render the results on the frame
        rendered_frame = np.squeeze(results.render())
        
        print(f"Rendered frame shape: {rendered_frame.shape}, dtype: {rendered_frame.dtype}")

        # Ensure the rendered frame is valid
        if rendered_frame is None or rendered_frame.size == 0:
            print("Failed to render frame")
            break

        # Display the rendered frame
        cv2.imshow('YOLO', rendered_frame)

    except Exception as e:
        print(f"An error occurred during inference: {e}")
        break

    # Break the loop when 'q' key is pressed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the capture and destroy all windows
cap.release()
cv2.destroyAllWindows()

```

This code initializes the webcam, captures frames in a loop, performs inference on each frame using the YOLOv5 model, and displays the results. The loop can be stopped by pressing the 'q' key.


# Summary

This notebook, demostrates how to set up and use YOLOv5 for object detection tasks. We installed the necessary dependencies, loaded a pre-trained YOLOv5 model, performed object detection on a sample image, and ran real-time object detection using a webcam.





