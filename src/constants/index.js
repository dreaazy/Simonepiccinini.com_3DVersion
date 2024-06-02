import * as assets from "../assets";

// constants.js or any configuration file
export const baseNavLinks = [
  {
    id: "program",
    title: "program",
  },
  {
    id: "projects",
    title: "projects",
  },
  {
    id: "pcto",
    title: "pcto",
  },
];
export const conditionalNavLinks = {
  "/program": [
    {
      id: "italiano",
      title: "Italiano",
    },
    {
      id: "storia",
      title: "Storia",
    },
  ],
  "/pcto": [
    
  ]
  
};

const services = [
  {
    title: "Web Developer",
    icon: assets.web,
  },
  {
    title: "React Native Developer",
    icon: assets.mobile,
  },
  {
    title: "Backend Developer",
    icon: assets.backend,
  },
  {
    title: "UX Designer",
    icon: assets.creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: assets.html,
  },
  {
    name: "CSS 3",
    icon: assets.css,
  },
  {
    name: "JavaScript",
    icon: assets.javascript,
  },
  {
    name: "TypeScript",
    icon: assets.typescript,
  },
  {
    name: "React JS",
    icon: assets.reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: assets.redux,
  },
  {
    name: "Tailwind CSS",
    icon: assets.tailwind,
  },
  {
    name: "Node JS",
    icon: assets.nodejs,
  },
  {
    name: "MongoDB",
    icon: assets.mongodb,
  },
  {
    name: "Three JS",
    icon: assets.threejs,
  },
  {
    name: "git",
    icon: assets.git,
  },
  {
    name: "figma",
    icon: assets.figma,
  },
  {
    name: "docker",
    icon: assets.docker,
  },
];


const aboutMe = {
  title: "About Me",
  img: "https://example.com/path/to/profile-image.jpg",
  introduction: "I'm a passionate full stack web developer with a love for technology, music, and science. My journey in web development has been driven by curiosity and a desire to create impactful digital experiences.",
  hobbies: [
    {
      name: "Music",
      description: "I play the drums and enjoy experimenting with various instruments such as the piano and guitar. Music allows me to explore my creativity and unwind after a busy day of coding.",
      img: "https://example.com/path/to/music-image.jpg"
    },
    {
      name: "Sports",
      description: "Staying active is important to me. I regularly go to the gym, run long distances, and have a background in playing football. These activities keep me fit and energized.",
      img: "https://example.com/path/to/sports-image.jpg"
    },
    {
      name: "Technology",
      description: "Beyond web development, I love exploring new tech trends and gadgets. Keeping up-to-date with the latest advancements helps me stay ahead in the tech industry.",
      img: "https://example.com/path/to/technology-image.jpg"
    },
    {
      name: "Science",
      description: "I have a deep interest in science, particularly in fields like astrophysics and biology. Learning about the universe and the intricacies of life fascinates me and fuels my curiosity.",
      img: "https://example.com/path/to/science-image.jpg"
    }
  ]
};


const experiences = [
  {
    title: "First Year",
    company_name: "Click To Explore",
    icon: assets.starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    path: "/prova",
  },
  {
    title: "Second Year",
    company_name: "Click To Explore",
    icon: assets.tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    path: "/prova",
  },
  {
    title: "Third Year",
    company_name: "Click To Explore",
    icon: assets.shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    path: "/prova",
  },
  {
    title: "Fourth Year",
    company_name: "Click To Explore",
    icon: assets.meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    path: "/prova",
  },
  {
    title: "Fifth Year",
    company_name: "Click To Explore",
    icon: assets.meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    path: "/ciao",
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Hackaton",
    description:
      "",
    short_description: "Platform for booking and managing car rentals.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: assets.h1,
    source_code_link: "https://github.com/",
    code: ``,
    images: [
      {
        url: assets.h1,
        text: "Premiazione 3° posto",
      },
      {
        url: assets.h2,
        text: "",
      },
      {
        url: assets.h3,
        text: "",
      },
      {
        url: assets.h4,
        text: "",
      },
      {
        url: assets.h5,
        text: "",
      },
      {
        url: assets.h6,
        text: "Postazione di lavoro",
      },
      
    ],
  },
  {
    name: "English 4U",
    description:
      "Corso di inglese per certificazione Fist",
    short_description: "Corso di inglese per certificazione Fist",
    tags: [
      {
        name: "english",
        color: "blue-text-gradient",
      },
      {
        name: "cambridge",
        color: "green-text-gradient",
      },
    ],
    image: assets.english4u,
    source_code_link: "",
    code: ``,
    images: [],
  },
  {
    name: "Emotions Detection Model",
    description: `
    <h3 class="text-xl font-bold text-white mb-4">L'obiettivo di questo progetto è eseguire un'analisi del sentiment su un dataset contenente informazioni sulla salute mentale di pazienti oncologici vulnerabili.</h3>
    <p class="mb-4">Questo modello effettua una classificazione multi-classe per distinguere l'emozione trasmessa dal testo. Le classi sono positivo, neutrale, negativo e molto negativo.</p>
    <p class="mb-4">Per l'addestramento di questo modello ho utilizzato TF-IDF per estrarre le caratteristiche e SVM per l'addestramento del modello.</p>
  `,
    short_description: "Sentiment analysis on mental health data.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: assets.emotional_model,
    source_code_link:
      "https://colab.research.google.com/drive/1_riAM9IRZCIZBt7tvlr-VEIVn56hpqKr?usp=sharing",
    code: `
    
![Image Alt Text](https://storage.googleapis.com/kaggle-datasets-images/4224082/7284561/c664ded426284f9b3c2f79b809a7a91d/dataset-cover.jpg?t=2023-12-26-13-58-32)

## The aim of this project is to perform sentimental analysis on a dataset containing mental health insights of vulnerable cancer patients.
This model is going to do a multi-class classification, to distinguish the emotion that the text transmit, the classes are positive, neutral, negative and very negative.

You can find the dataset from this link: [Mental Health Insights](https://www.kaggle.com/datasets/irinhoque/mental-health-insights-vulnerable-cancer-patients).

For training this model I used TF-IDF for extracting the features and SVM for training the model.

# Importing the dataset from github and all the dependencies

\`\`\`python
# Importing the Support Vector Machine (SVM)
from sklearn.svm import SVC
# Importing TF-IDF Vectorizer for text data preprocessing
from sklearn.feature_extraction.text import TfidfVectorizer
# Importing function for splitting the dataset into training and testing sets
from sklearn.model_selection import train_test_split
# Importing metrics for evaluating the model's performance
from sklearn.metrics import accuracy_score, classification_report
# Importing pandas for handling and manipulating datasets
import pandas as pd

# Data visualization
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.metrics import confusion_matrix

!wget https://raw.githubusercontent.com/dreaazy/Mental-Health-Insights-of-Vulnerable-Cancer-Patients/master/mental_health_dataset.csv

# Load the dataset into a Pandas DataFrame
df = pd.read_csv('mental_health_dataset.csv')
\`\`\`

# Specify features (X) and target variable for binary classification

\`\`\`python
X = df['posts']
y_classification = df['predicted']

# Split the dataset into training and testing sets
X_train, X_test, y_train_classification, y_test_classification = train_test_split(X, y_classification, test_size=0.2, random_state=42)
\`\`\`

# Vectorizer

> It's a technique to extract features from text in my dataset. Without it, it wouldn't be possible to utilize SVM for binary classification.

## **Term frequency:** Measures how frequently a term (word) occurs in a document.
## **Inverse Document Frequency:** Measures the importance of a term across a collection of documents.
![Image Alt Text](https://www.kdnuggets.com/wp-content/uploads/awan_convert_text_documents_tfidf_matrix_tfidfvectorizer_3.png)

\`\`\`python
# Handle missing values in the 'posts' column to avoid problems in the elaboration of data
df['posts'] = df['posts'].fillna('')

# Specify features (X) and target variable for binary classification
X = df['posts']
y_classification = df['predicted']

# Split the dataset into training and testing sets
X_train, X_test, y_train_classification, y_test_classification = train_test_split(X, y_classification, test_size=0.2, random_state=42)

# TF-IDF Vectorization
vectorizer = TfidfVectorizer(token_pattern=r'\\b[a-zA-Z]+\\b')  # Remove non-alphabetic words from the vocabulary

# Handle missing values in the training and testing sets
X_train = X_train.fillna('')
X_test = X_test.fillna('')

# Fit the vectorizer on the training data (X_train) and transform it into a TF-IDF matrix.
X_train_tfidf = vectorizer.fit_transform(X_train)
# Apply the vocabulary learned during the fitting process to the test data (X_test), transforming it into a TF-IDF matrix.
X_test_tfidf = vectorizer.transform(X_test)

# Convert TF-IDF matrices to DataFrames
df_train_tfidf = pd.DataFrame(X_train_tfidf.toarray(), columns=vectorizer.get_feature_names_out())
df_test_tfidf = pd.DataFrame(X_test_tfidf.toarray(), columns=vectorizer.get_feature_names_out())

# Rows of the matrix that are going to display
num_rows_to_display = 10

print(f"TF-IDF Matrix for Training Data (First {num_rows_to_display} rows):")
print(df_train_tfidf.head(num_rows_to_display))

print(f"TF-IDF Matrix for Testing Data (First {num_rows_to_display} rows):")
print(df_test_tfidf.head(num_rows_to_display))

# Save the vocabulary to a text file
with open('vocabulary.txt', 'w') as file:
    for word in vectorizer.get_feature_names_out():
        file.write(word + '\\n')

print("Vocabulary saved to 'vocabulary.txt'")

# Instantiate SVM model for classification
svm_classifier = SVC(kernel='linear')

# Fit the SVM model with training data
svm_classifier.fit(X_train_tfidf, y_train_classification)

# Make predictions on the testing data
y_pred_classification = svm_classifier.predict(X_test_tfidf)

# Evaluate the model performance
accuracy_classification = accuracy_score(y_test_classification, y_pred_classification)
classification_report_classification = classification_report(y_test_classification, y_pred_classification)

print(f'Accuracy for Binary Classification: {accuracy_classification}')
print('Classification Report for Binary Classification:\\n', classification_report_classification)

# Create a confusion matrix
conf_matrix = confusion_matrix(y_test_classification, y_pred_classification, labels=df['predicted'].unique())

# Plot the confusion matrix as a heatmap
plt.figure(figsize=(8, 6))
sns.heatmap(conf_matrix, annot=True, fmt='d', cmap='Blues', xticklabels=df['predicted'].unique(), yticklabels=df['predicted'].unique())
plt.title('Confusion Matrix')
plt.xlabel('Predicted')
plt.ylabel('True')
plt.show()
\`\`\`
    `,
    images: [],
  },
  {
    name: "La bellezza che cura",
    description: "Il Comune di Jesi, con gli Assessorati all’Urbanistica e alla Cultura, l’Università Politecnica delle Marche, con il suo Corso di Laurea in Ingegneria Edile Architettura, in sinergia con il MAXXI Museo Nazionale delle arti del XXI secolo, hanno organizzato una serie di incontri aperti alla cittadinanza, dedicati all’architetto colombiano Giancarlo Mazzanti. Mazzanti, firma dell’architettura di fama mondiale, ha origini jesine, opera attualmente in diverse parti del mondo ed è uno dei progettisti colombiani più noti nel suo Paese e all’estero, con all’attivo importantissime realizzazioni di carattere pubblico e sociale, che hanno trasformato l’immagine di quartieri e aree urbane in diverse città colombiane. Non solo una mostra interattiva delle sue opere, presso le Sale Espositive Betto Tesei di Palazzo Pianetti, ma anche conferenze e incontri svolti nel mese di novembre alla presenza dell’architetto, presso le scuole secondarie di secondo grado della città di Jesi, per coinvolgere studenti e studentesse e stimolarli, attraverso dispositivi di gioco.",
    short_description: "Incontro con l'architetto Giancarlo Mazzanti",
    tags: [
      {
        name: "architettura",
        color: "blue-text-gradient",
      },
      {
        name: "projects",
        color: "green-text-gradient",
      },
    ],
    image: assets.la_bellezza_che_cura_mobile,
    source_code_link: "",
    code: ``,
    images: [],
  },
  {
    name: "WeChat",
    description: "",
    short_description: "WebChat",
    tags: [
      {
        name: "informatica",
        color: "blue-text-gradient",
      },
      {
        name: "applicazione web",
        color: "green-text-gradient",
      },
    ],
    image: assets.wechat,
    source_code_link: "",
    code: ``,
    images: [],
  },
  {
    name: "Giorno Libero",
    description: "",
    short_description: "Progetto di classe dell'anno 2023/2024",
    tags: [
      {
        name: "informatica",
        color: "blue-text-gradient",
      },
      {
        name: "applicazione web",
        color: "green-text-gradient",
      },
    ],
    image: assets.gglibero,
    source_code_link: "",
    code: ``,
    images: [],
  },
  {
    name: "Object Detection Model",
    description: "This project demonstrates using YOLOv5 for real-time object detection. YOLOv5, \"You Only Look Once,\" is a fast algorithm that predicts bounding boxes and class probabilities in images. We install necessary dependencies, load a pre-trained model, and perform object detection on a sample image and real-time webcam feed. Due to an AMD GPU (Radeon RX 470), CUDA is not used, defaulting to CPU processing with an Intel(R) Core(TM) i5-9400F. Despite slower processing, YOLOv5's functionality and accuracy remain unaffected, showcasing its capabilities in both static and dynamic scenarios.",
    short_description: "Object detection model",
    tags: [
      {
        name: "intelligenza artificiale",
        color: "blue-text-gradient",
      },
      {
        name: "CNN",
        color: "green-text-gradient",
      },
    ],
    image: assets.od_cover,
    source_code_link: "",
    code: `

# YOLOv5 Object Detection

This notebook demonstrates how to set up and use YOLOv5 for object detection tasks. 

## What is YOLOv5?


YOLO is an acronym for **“You Only Look Once”** and it has that name because this is a real-time object detection algorithm that processes images very fast.
It is a single-stage object detector that uses a convolutional neural network (CNN) to predict the bounding boxes and class probabilities of objects in input images.


## How Does it works?

###### The basic idea behind YOLO is to divide the input image into a grid of cells and, for each cell, predict the probability of the presence of an object and the bounding box coordinates of the object. The process of YOLO can be broken down into several steps:

- Input image is passed through a CNN to extract features from the image.
- The features are then passed through a series of fully connected layers, which predict ‌class probabilities and bounding box coordinates.
- The image is divided into a grid of cells, and each cell is responsible for predicting a set of bounding boxes and class probabilities.
- The output of the network is a set of bounding boxes and class probabilities for each cell.
- The bounding boxes are then filtered using a post-processing algorithm called non-max suppression to remove overlapping boxes and choose the box with the highest probability.
- The final output is a set of predicted bounding boxes and class labels for each object in the image.

One of the key advantages of YOLO is that it processes the entire image in one pass, making it faster and more efficient than two-stage object detectors such as R-CNN and its variants.


![](https://a.storyblok.com/f/139616/1200x800/297c23f45f/structure-of-yolo.webp)


## CPU-Based Processing Explanation

In this project, CUDA is not utilized because the current system is equipped with an AMD GPU, specifically I have the RADEON RX 470, which does not support CUDA because it's specifically designed for NVIDIA GPUs.

CUDA, is a parallel computing platform developed by NVIDIA that is exclusive to NVIDIA GPUs. As a result, the deep learning framework, PyTorch, will default to using the CPU for all computations. While this may result in slower processing times compared to utilizing a CUDA-compatible GPU.
Regardless of the use of the CPU the functionality and accuracy of the object detection tasks performed by YOLOv5 remain unaffected.

The results you are going to see are based using the CPU: Intel(R) Core(TM) i5-9400F CPU, 2.90 GHz


# 1. Install and Import Dependencies

First, we need to install the required libraries: \`torch\`, \`torchvision\`, \`torchaudio\`, and clone the YOLOv5 repository. 
We also need to install the dependencies specified in the YOLOv5 repository.

\`\`\`python
!pip install torch torchvision torchaudio
!git clone https://github.com/ultralytics/yolov5
!cd yolov5 && pip install -r requirements.txt

\`\`\`

# 2. Import Necessary Libraries

We will import the required libraries for our task. These include \`torch\` for loading the YOLOv5 model, \`matplotlib\` for displaying images, \`numpy\` for numerical operations, and \`cv2\` from OpenCV for handling image and video data.

\`\`\`python
import torch
from matplotlib import pyplot as plt
import numpy as np
import cv2

\`\`\`

# 3. Load YOLOv5 Model

We load the pre-trained YOLOv5 model using the PyTorch Hub API. The model will be downloaded and cached for future use.

\`\`\`python
model = torch.hub.load('ultralytics/yolov5', 'yolov5s')
model
\`\`\`

The output indicates that the YOLOv5s model has been successfully loaded. The model summary shows its architecture, number of layers, parameters, and other details.


# 4. Classes

You can list all the class names that the YOLOv5 model can recognize running this cell.

\`\`\`python
model = torch.hub.load('ultralytics/yolov5', 'yolov5s')

class_names = model.names
print(class_names)

\`\`\`

# 5. Perform Object Detection on an Image

We will use the loaded YOLOv5 model to perform object detection on a sample image from a URL.

\`\`\`python
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

\`\`\`


The above code fetches an image from the provided URL, performs inference using the YOLOv5 model, prints the detection results, and displays the image with detected objects.

## Result

If the image has been correctly processed, you will see each detected object enclosed in a rectangle (**Bounding Box**). On top of this box, there is a **Class Label** that represents the name of the class, along with a **Confidence Score** that indicates the percentage confidence level of the model in its prediction.


# 6. Real-Time Object Detection Using Webcam

Finally, we perform real-time object detection using a webcam. We capture frames from the webcam, run inference on each frame, and display the results in real-time.


\`\`\`python

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

\`\`\`

This code initializes the webcam, captures frames in a loop, performs inference on each frame using the YOLOv5 model, and displays the results. The loop can be stopped by pressing the 'q' key.


# Summary

This notebook, demostrates how to set up and use YOLOv5 for object detection tasks. We installed the necessary dependencies, loaded a pre-trained YOLOv5 model, performed object detection on a sample image, and ran real-time object detection using a webcam.
    `,
    images: [
      {
        url: assets.image_dim,
        text: "",
      },
    ],
    videos: [
      {
        url: assets.video_dim,
        text: "",
      },
    ],
    downloads: [
      {
        source: assets.od_ipynb,
        text: "Download Jupyter Notebook"
      },
      {
        source: assets.od_md,
        text: "Download Markdown File"
      }
    ]
    
  }
];

const storia = {
  nome: "Storia",
  docente: "Giulia Montesi",
  argomenti: [
    {
      capitolo: 1,
      titolo: "All’alba del ‘900 tra euforia e inquietudini",
      argomenti: [
        {
          titolo: "I fattori dell’espansione",
          spiegazione:
            "Gli anni che segnano l'inizio del XX secolo sono caratterizzati da una fervente espansione economica e territoriale delle potenze mondiali. Questi fattori di espansione includono lo sviluppo industriale, la ricerca di nuovi mercati e risorse, nonché la volontà di imporsi come potenze dominanti a livello globale.",
          img: "https://cdn.studenti.stbm.it/images/2018/11/05/un-impianto-ford-nel-1914-orig.jpeg",
        },
        {
          titolo: "L’organizzazione scientifica del lavoro",
          spiegazione:
            "L'organizzazione scientifica del lavoro è un approccio alla gestione industriale sviluppato nel periodo che si contraddistingue per l'applicazione di principi scientifici per migliorare l'efficienza produttiva. Questo modello ha portato a una maggiore divisione del lavoro, alla standardizzazione dei processi e alla ricerca di metodi più razionali per aumentare la produttività.",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/A-line1913.jpg/800px-A-line1913.jpg",
        },
        {
          titolo: "Una società in movimento",
          spiegazione:
            "Il periodo all'alba del XX secolo è caratterizzato da significativi cambiamenti sociali e culturali. La crescita economica e l'urbanizzazione hanno portato a una maggiore mobilità sociale, con la formazione di nuove classi sociali e il declino delle tradizionali strutture sociali. Questi cambiamenti hanno anche portato a una maggiore attenzione alle questioni sociali e all'emergere di movimenti politici e sociali.",
          img: "https://cdn.skuola.net/w1200h687/news_foto/2018/societa-massa.jpg",
        },
        {
          titolo: "Il sindacalismo operaio",
          spiegazione:
            "Il sindacalismo operaio è emerso come una forza significativa nel panorama politico ed economico del periodo. I lavoratori si sono organizzati in sindacati per difendere i propri diritti e migliorare le condizioni lavorative. Questo movimento ha giocato un ruolo importante nel promuovere riforme sociali e nell'affermare i diritti dei lavoratori all'interno delle società industrializzate.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2vvA3lSB1G61Pk7n_h4ErhX6RaejWNhGa7jgUvrVUKQ&s",
        },
      ],
      img: assets.sto_1,
    },
    {
      capitolo: 2,
      titolo: "I mutamenti dello scenario mondiale",
      argomenti: [
        {
          titolo: "La nascita del nazionalismo in Europa",
          spiegazione:
            "Il nazionalismo ha iniziato a crescere in Europa nel XIX secolo, alimentato da una serie di fattori tra cui l'ascesa delle potenze nazionali, il desiderio di autodeterminazione dei popoli e il consolidamento degli stati-nazione. Questo ha portato a cambiamenti significativi nelle relazioni internazionali e alla crescita delle tensioni tra le nazioni europee.",
          img: "https://www.cinquecolonne.it/wp-content/uploads/2022/12/nazionalismo-in-Europa-Foto-di-Hands-off-my-tags-Michael-Gaida-da-Pixabay_11zon.jpg",
        },
        {
          titolo: "La Russia zarista",
          spiegazione:
            "La Russia sotto il regime zarista era caratterizzata da un sistema politico autocratico e da profonde disparità sociali ed economiche. La politica interna era segnata da repressione politica e dalla mancanza di riforme significative, mentre sul fronte estero la Russia era impegnata in conflitti imperiali e diplomatici che ne minavano la stabilità.",
          img: "https://www.ugei.it/wp-content/uploads/2024/04/copertina-russia.jpg",
        },
        {
          titolo: "Gli USA verso il ruolo di potenza mondiale",
          spiegazione:
            "Nel periodo all'incirca dell'inizio del XX secolo, gli Stati Uniti stavano emergendo come una potenza mondiale. Con una rapida crescita economica, espansione territoriale e ambizioni imperiali, gli USA stavano acquisendo un ruolo sempre più influente sulla scena internazionale, sfidando le potenze europee tradizionali.",
          img: "https://www.thoughtco.com/thmb/IMMApwRzm6iKsLAIo4HX7HAzhTs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/nola1900-5756b11d5f9b5892e8a8345c.jpg",
        },
      ],
      img: assets.sto_2,
    },
    {
      capitolo: 3,
      titolo: "L’Italia nell’età giolittiana",
      argomenti: [
        {
          titolo: "Giolitti al governo ed il rapporto con i socialisti",
          spiegazione:
            "Giovanni Giolitti è stato uno dei principali statisti italiani del periodo pre-bellico. Il suo governo è stato caratterizzato da politiche di modernizzazione e di compromesso con i socialisti, al fine di garantire la stabilità politica e promuovere lo sviluppo economico.",
          img: "https://i0.wp.com/fondazionenenni.blog/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-11-at-16.23.02.jpeg?fit=1142%2C692&ssl=1",
        },
        {
          titolo: "I caratteri del sistema giolittiano",
          spiegazione:
            "Il sistema giolittiano si basava su un compromesso tra le forze politiche, con l'obiettivo di mantenere la stabilità politica e promuovere lo sviluppo economico. Questo modello si è caratterizzato per politiche pragmatiche e per una certa forma di clientelismo, che ha permesso il mantenimento del potere da parte di Giolitti per un lungo periodo.",
          img: "https://static.miraheze.org/nonciclopediawiki/e/ee/Giolitti_Corna.jpg",
        },
        {
          titolo: "Lo sviluppo industriale e la politica economica",
          spiegazione:
            "Durante l'età giolittiana, l'Italia ha conosciuto un significativo sviluppo industriale, con la crescita di settori come l'industria pesante, la siderurgia e l'automobilistica. Giolitti ha promosso politiche economiche volte a sostenere questo sviluppo, tra cui la protezione dell'industria nazionale e la promozione degli investimenti esteri.",
          img: "https://cdn.studenti.stbm.it/images/2023/07/07/italia-inizio-900_600x400.jpeg",
        },
        {
          titolo: "Il divario Nord/Sud",
          spiegazione:
            "Uno dei tratti distintivi dell'Italia nell'età giolittiana era il divario economico e sociale tra il Nord industrializzato e il Sud agricolo. Questa disparità ha contribuito a tensioni sociali e politiche, alimentando il malcontento e le rivendicazioni per maggiori opportunità e giustizia sociale nelle regioni meridionali.",
          img: "https://www.opencalabria.com/wp-content/uploads/2018/07/unita.jpg",
        },
        {
          titolo: "Nazionalismo italiano",
          spiegazione:
            "Durante l'età giolittiana, si è assistito ad un crescente sentimento nazionalista in Italia, alimentato dall'aspirazione a consolidare l'unità nazionale e a ottenere un ruolo di rilievo sulla scena internazionale. Questo nazionalismo ha influenzato la politica estera italiana e ha contribuito alla coesione nazionale del Paese.",
          img: "https://www.prometheus-studio.it/filosofia_e_storia/wp-content/uploads/2020/05/crisi-fine-secoolo-cover-blog.jpg",
        },
        {
          titolo: "L’epilogo della stagione giolittiana",
          spiegazione:
            "La stagione giolittiana è giunta al termine a causa di una serie di crisi politiche ed economiche, tra cui la guerra di Libia e lo scoppio della Prima Guerra Mondiale. Questi eventi hanno segnato la fine del governo di Giolitti e l'inizio di un periodo di instabilità politica e conflitto sociale in Italia.",
          img: "https://visionandonellastoria.net/wp-content/uploads/2013/03/parlamento.jpg",
        },
      ],
      img: assets.sto_3,
    },
    {
      capitolo: 4,
      titolo: "La Grande guerra",
      argomenti: [
        {
          titolo: "Da crisi locale a conflitto continentale",
          spiegazione:
            "La Prima Guerra Mondiale è stata originariamente scatenata da una serie di crisi locali e tensioni internazionali che si sono poi trasformate in un conflitto su scala continentale. Eventi come l'assassinio dell'arciduca Francesco Ferdinando d'Austria nel 1914 hanno innescato una serie di alleanze militari e dichiarazioni di guerra che hanno coinvolto molte nazioni europee.",
          img: "https://upload.wikimedia.org/wikipedia/commons/5/59/75_mm_battaglia_della_Marna.jpg",
        },
        {
          titolo: "Gli schieramenti belligeranti",
          spiegazione:
            "La Prima Guerra Mondiale ha visto la formazione di due principali alleanze militari: gli Alleati, composti principalmente da Francia, Regno Unito, Russia e successivamente dagli Stati Uniti, e le Potenze Centrali, che includevano Germania, Austria-Ungheria e l'Impero Ottomano. Questi schieramenti si sono scontrati in una serie di battaglie che hanno caratterizzato il conflitto.",
          img: "https://www.lacittafutura.it/media/k2/items/cache/355a2f5e4acecd91104a7e7c5553f2cc_XL.jpg",
        },
        {
          titolo: "Da guerra di movimento a guerra di posizione",
          spiegazione:
            "Inizialmente la guerra si caratterizzava per la mobilità e la velocità degli spostamenti delle truppe, ma presto si trasformò in una guerra di posizione caratterizzata da trincee e dalla staticità dei fronti. Questo cambiamento portò a un prolungamento del conflitto e a una crescente devastazione delle aree coinvolte.",
          img: "https://www.nationalgeographic.it/upload/ngi-image/wwi-trench-archaeology-12.jpg?w=710&h=474",
        },
        {
          titolo: "L’Italia dall’intervento alla neutralità",
          spiegazione:
            "L'Italia, inizialmente neutrale, entrò in guerra a fianco degli Alleati nel 1915, dopo aver firmato il Patto di Londra. L'intervento italiano fu motivato da aspirazioni territoriali e dalla promessa di ottenere territori irredenti. Tuttavia, il conflitto si rivelò disastroso per l'Italia, con pesanti perdite umane e pochi guadagni territoriali.",
          img: "https://www.inliberta.it/wp-content/uploads/2020/07/BB005A16-3A28-48F9-B2FF-A024298138D2.jpeg",
        },
        {
          titolo: "1915-1916 un’immane carneficina",
          spiegazione:
            "Gli anni 1915-1916 videro alcune delle battaglie più sanguinose e brutali della guerra, come la battaglia di Verdun e la battaglia della Somme. Queste battaglie causarono milioni di morti e feriti da entrambe le parti, senza portare a significativi cambiamenti nei confini territoriali.",
          img: "https://profgiuseppebettati.it/1914/somme.jpg",
        },
        {
          titolo: "Le armi della tecnologia e della propaganda",
          spiegazione:
            "La Prima Guerra Mondiale vide l'introduzione di nuove tecnologie belliche, come il gas tossico, i carri armati e gli aerei da combattimento. Allo stesso tempo, entrambi gli schieramenti utilizzarono la propaganda per mobilitare le masse e giustificare il conflitto, influenzando l'opinione pubblica e sostenendo lo sforzo bellico.",
          img: "https://us.123rf.com/450wm/yurolaitsalbert/yurolaitsalbert2005/yurolaitsalbert200500077/146175697-giovane-casual-con-una-maschera-a-gas-in-piedi-per-strada-in-una-citt%C3%A0-vuota.jpg?ver=6",
        },
        {
          titolo: "La mobilitazione collettiva al servizio della guerra totale",
          spiegazione:
            "La Prima Guerra Mondiale fu caratterizzata da una mobilitazione totale delle risorse economiche, sociali e umane dei paesi coinvolti. Gli sforzi bellici coinvolsero l'intera società, con lo sfruttamento delle risorse industriali, la leva obbligatoria e l'intervento dello Stato nell'economia.",
          img: "https://img.ilgcdn.com/sites/default/files/styles/xl/public/foto/2022/04/30/1651342526-ilgiornale2-20220430201453983.jpg?_=1651342526",
        },
        {
          titolo: "Le svolte del 1917",
          spiegazione:
            "Il 1917 fu un anno cruciale nella Prima Guerra Mondiale. La Rivoluzione Russa portò alla caduta dello zar e all'ascesa al potere dei bolscevichi, che successivamente firmarono un armistizio con le Potenze Centrali, uscendo così dal conflitto. Allo stesso tempo, gli Stati Uniti entrarono in guerra a fianco degli Alleati, cambiando radicalmente l'equilibrio delle forze.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQruGXhi5Mh9H653QFdbUd_urBuUKqyezuSX5VLViMqfg&s",
        },
        {
          titolo: "L’epilogo della guerra",
          spiegazione:
            "La Prima Guerra Mondiale si concluse con la firma dell'Armistizio di Compiègne nel novembre 1918. Questo segnò la sconfitta delle Potenze Centrali e la vittoria degli Alleati, ma lasciò dietro di sé un bilancio di distruzione, morte e instabilità politica che avrebbe avuto profonde conseguenze per gli anni a venire.",
          img: "https://gruppodilettura.files.wordpress.com/2018/11/john-singer-sargent.png?w=800",
        },
      ],
      img: assets.sto_4,
    },
    {
      capitolo: 5,
      titolo: "I fragili equilibri del dopoguerra",
      argomenti: [
        {
          titolo: "I trattati di pace e la Società delle Nazioni",
          spiegazione:
            "Il dopoguerra fu segnato dalla firma di una serie di trattati di pace che cercavano di porre fine al conflitto e di stabilire nuovi confini e rapporti internazionali. La Società delle Nazioni fu fondata con l'obiettivo di prevenire futuri conflitti attraverso la diplomazia e la cooperazione internazionale.",
          img: "https://www.storicang.it/medio/2022/10/07/societa-delle-nazioni_8de59169_1200x630.jpg",
        },
        {
          titolo: "I problemi dell’economia postbellica",
          spiegazione:
            "Dopo la guerra, molti paesi si trovarono ad affrontare gravi problemi economici, tra cui inflazione, disoccupazione e indebitamento. La ricostruzione postbellica richiese un enorme sforzo e molte nazioni dovettero affrontare difficoltà nel riprendersi dagli effetti devastanti del conflitto.",
          img: "https://www.puntidifuga.net/wp-content/uploads/2021/04/economia-640x381.jpg",
        },
        {
          titolo: "Le finanze e gli scambi internazionali",
          spiegazione:
            "Il dopoguerra vide un cambiamento nei rapporti finanziari e commerciali internazionali, con la fine del sistema aureo e l'introduzione di nuovi meccanismi di gestione economica. Il protezionismo e le politiche commerciali nazionali divennero più diffusi, mentre la cooperazione economica internazionale rimase limitata.",
          img: "https://www.gedistatic.it/content/gedi/img/limesonline/www/2019/07/cerniera_commerciale_europa_maronta_719.jpg",
        },
        {
          titolo: "Francia e Gran Bretagna",
          spiegazione:
            "Francia e Gran Bretagna furono tra le principali potenze vincitrici della Prima Guerra Mondiale, ma entrambe affrontarono sfide interne ed esterne nel dopoguerra. La Francia cercò di assicurarsi la sicurezza attraverso la creazione di una cintura di stati cuscinetto, mentre il Regno Unito dovette affrontare il declino dell'impero coloniale e le conseguenze sociali del conflitto.",
          img: "https://www.lacittafutura.it/media/k2/items/cache/eb9bf436458080249c7633d607611800_XL.jpg",
        },
        {
          titolo: "Gli esordi del movimento nazionalista in India",
          spiegazione:
            "Il dopoguerra vide un crescente movimento nazionalista in India, che cercava l'indipendenza dal dominio coloniale britannico. Leader come Mahatma Gandhi guidarono campagne di disobbedienza civile e resistenza non violenta contro il governo coloniale, portando gradualmente all'indipendenza dell'India nel 1947.",
          img: "https://milano.repubblica.it/images/2013/05/02/164409301-4e0b6663-d8e3-4ddf-a720-636ead5dd910.jpg",
        },
      ],
      img: assets.sto_5,
    },
    {
      capitolo: 6,
      titolo: "La rivoluzione bolscevica e il biennio rosso",
      argomenti: [
        {
          titolo: "Dalla caduta dello zar alla rivoluzione d’ottobre",
          spiegazione:
            "La rivoluzione russa del 1917 portò alla caduta dello zar Nicola II e alla presa del potere da parte dei bolscevichi, guidati da Lenin e Trotsky. La Rivoluzione d'Ottobre mise fine al regime zarista e portò all'instaurazione del primo stato socialista al mondo.",
          img: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Bela.Kun.Revolution.1919.jpg",
        },
        {
          titolo: "Dalla guerra civile alla NEP",
          spiegazione:
            "Dopo la rivoluzione, la Russia fu sconvolta da una lunga e cruenta guerra civile tra i bolscevichi e le forze anti-comuniste, conosciute come i Bianchi. La guerra civile terminò con la vittoria dei bolscevichi, che iniziarono a consolidare il loro potere e a introdurre politiche economiche come la NEP (Nuova Politica Economica) per stabilizzare il paese.",
          img: "https://assets.editorial.aetnd.com/uploads/2014/01/lenin-gettyimages-590679353.jpg?width=768",
        },
        {
          titolo: "L’Europa senza pace",
          spiegazione:
            "Il dopoguerra in Europa fu segnato da instabilità politica, sociale ed economica. Molti paesi europei affrontarono rivolte sociali, agitazioni politiche e disordini civili, mentre le conseguenze della guerra e le richieste di ricostruzione resero difficile il ritorno alla normalità.",
          img: "https://www.turismofvg.it/proxyvfs.axd/image_hd/r90649/1280px-%D0%B4%D0%B5%D0%BC%D0%BE%D0%BD%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F_%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BD%D0%B8%D1%86_%D0%BF%D1%83%D1%82%D0%B8%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%B7%D0%B0%D0%B2%D0%BE%D0%B4%D0%B0_%D0%B2_%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%B8_%D0%B4%D0%B5%D0%BD%D1%8C_%D1%84%D0%B5%D0%B2%D1%80%D0%B0%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B8_%D1%80%D0%B5%D0%B2%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D0%B8_1917-jpg?v=100461&ext=.jpg",
        },
        {
          titolo: "La Repubblica di Weimar in Germania",
          spiegazione:
            "La Repubblica di Weimar fu il regime democratico che succedette all'impero tedesco dopo la sconfitta nella Prima Guerra Mondiale. Tuttavia, la Repubblica si trovò ad affrontare numerosi problemi, tra cui instabilità politica, inflazione galoppante e disordini sociali, che alla fine favorirono l'ascesa del nazismo.",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Bundesarchiv_Bild_102-14439%2C_Rede_Adolf_Hitlers_zum_Erm%C3%A4chtigungsgesetz.jpg/260px-Bundesarchiv_Bild_102-14439%2C_Rede_Adolf_Hitlers_zum_Erm%C3%A4chtigungsgesetz.jpg",
        },
        {
          titolo: "Il difficile dopoguerra in Italia",
          spiegazione:
            "In Italia, il dopoguerra fu caratterizzato da instabilità politica, conflitti sociali e difficoltà economiche. Il paese si trovò diviso tra forze politiche contrapposte, tra cui socialisti, comunisti, fascisti e monarchici, e affrontò sfide come la ricostruzione postbellica, il debito pubblico e la questione degli irredentisti.",
          img: "https://cdn.skuola.net/news_foto/2018/primo-dopoguerra-italiano.jpg",
        },
        {
          titolo: "Dalla vittoria mutilata al biennio rosso",
          spiegazione:
            "La vittoria italiana nella Prima Guerra Mondiale fu considerata 'mutilata' a causa della mancata ottenimento di alcuni territori promessi nel Patto di Londra. Questo generò un sentimento di frustrazione e scontento nella popolazione, che si manifestò nel 'biennio rosso' (1919-1920), un periodo di intensa agitazione sociale e conflitto politico caratterizzato da scioperi, occupazioni di fabbriche e scontri di strada.",
          img: "https://www.csvlombardia.it/wp-content/uploads/2019/08/ANPI_Mauro_Lena.jpg",
        },
      ],
      img: assets.sto_6,
    },
    {
      capitolo: 7,
      titolo: "Il regime fascista di Mussolini",
      argomenti: [
        {
          titolo: "Dai Fasci di combattimento alla marcia su Roma",
          spiegazione:
            "Il regime fascista di Mussolini ebbe origine dai Fasci di combattimento, movimento politico di estrema destra fondato nel 1919. Nel 1922, Mussolini orchestrò la Marcia su Roma, una dimostrazione di forza che portò alla sua nomina a capo del governo italiano da parte del re Vittorio Emanuele III.",
          img: "https://www.focusjunior.it/content/uploads/2022/10/marcia-roma-1922.jpg",
        },
        {
          titolo: "Dalla legge Acerbo al Delitto Matteotti",
          spiegazione:
            "La legge Acerbo del 1923 favorì il Partito Nazionale Fascista nelle elezioni con un sistema elettorale che assegnava la maggioranza dei seggi al partito che avesse ottenuto la maggioranza relativa dei voti. Il Delitto Matteotti del 1924, l'assassinio del deputato socialista Giacomo Matteotti da parte di squadristi fascisti, scatenò una grave crisi politica.",
          img: "https://images.collettiva.it/view/acePublic/alias/contentid/Y2Y3MzJlMWMtMjEzYS00/0/113503629-e5bd33ce-4a21-44e0-bb39-683cd1fdf75e-jpeg.webp",
        },
        {
          titolo: "La fascistizzazione dello Stato",
          spiegazione:
            "Durante il regime fascista, lo Stato italiano subì una profonda trasformazione in senso autoritario e totalitario. Le istituzioni democratiche furono progressivamente soppiantate da strutture di potere controllate dal Partito Fascista, che estese il suo controllo su tutti gli aspetti della vita politica, sociale ed economica del paese.",
          img: "https://images.collettiva.it/view/acePublic/alias/contentid/YmJhYTM0NDMtZTUwMy00/1/image_961469.webp?f=16%3A9&q=0.75&w=3840",
        },
        {
          titolo: "L’antifascismo",
          spiegazione:
            "L'antifascismo rappresentò l'opposizione al regime di Mussolini da parte di gruppi politici, sindacati, intellettuali e cittadini che si opponevano alla dittatura fascista e alle sue politiche autoritarie, repressive e nazionaliste. L'antifascismo si manifestò attraverso movimenti di resistenza, proteste, scioperi e atti di sabotaggio.",
          img: "https://upload.wikimedia.org/wikipedia/it/0/00/Manifestazione_antifascista.jpg",
        },
        {
          titolo: "I rapporti con la Chiesa e i Patti Lateranensi",
          spiegazione:
            "I Patti Lateranensi del 1929 furono un accordo tra il regime fascista italiano e la Santa Sede che pose fine alla questione romana, riconoscendo lo Stato della Città del Vaticano come entità sovrana e istituendo una serie di privilegi per la Chiesa cattolica in Italia. Questi patti consolidarono il sostegno della Chiesa al regime fascista.",
          img: "https://media.vaticannews.va/media/content/dam-archive/vaticannews/multimedia/2019/02/08/Immagine-firma-Patti-LateranensiAEM.jpg/_jcr_content/renditions/cq5dam.thumbnail.cropped.1500.844.jpeg",
        },
        {
          titolo: "L’organizzazione del consenso",
          spiegazione:
            "Il regime fascista utilizzò una serie di strumenti e pratiche per ottenere e mantenere il consenso della popolazione italiana. Questi includono la propaganda di regime, il controllo dei media, la repressione delle opposizioni politiche, l'esaltazione del nazionalismo e dell'identità italiana, e la promozione di politiche di benessere sociale per attirare il sostegno dei cittadini.",
          img: "https://www.focus.it/site_stored/imgs/0003/009/mussoliniapert2_preview.jpg",
        },
        {
          titolo: "La politica economica del fascismo",
          spiegazione:
            "La politica economica del regime fascista si basava su un modello di economia corporativa e interventista. Lo Stato interveniva pesantemente nell'economia per promuovere l'industrializzazione, il protezionismo, l'autarchia e il controllo statale dei settori chiave dell'economia, come l'industria pesante e le risorse naturali.",
          img: "https://confinepiulungo.it/wp-content/uploads/2021/07/12-009-Fascisti-triestini-a-Rovigno.jpg",
        },
        {
          titolo: "Gli squilibri interni alla società italiana",
          spiegazione:
            "Il regime fascista portò a una serie di profondi squilibri e contraddizioni nella società italiana. Questi includono la soppressione delle libertà civili e politiche, la violenza e la discriminazione contro gli oppositori politici e le minoranze, la promozione di un culto della personalità intorno a Mussolini e la militarizzazione della società.",
          img: "https://www.laputa.it/wp-content/uploads/2015/10/NYC_Mulberry_Street_1900-1080x786.jpg",
        },
        {
          titolo: "La politica estera fascista",
          spiegazione:
            "La politica estera del regime fascista fu caratterizzata dall'espansionismo e dalla ricerca di prestigio internazionale. Mussolini mirava a riaffermare l'influenza italiana nel Mediterraneo e a competere con le grandi potenze europee. Tuttavia, l'avventura bellica in Africa e nei Balcani portò alla sconfitta italiana durante la Seconda Guerra Mondiale.",
          img: "https://cards.algoreducation.com/_next/image?url=https%3A%2F%2Ffiles.algoreducation.com%2Fproduction-ts%2F__S3__d7f1ccdb-5198-44c2-ac53-3221855b2256&w=3840&q=75",
        },
        {
          titolo: "Le leggi razziali e le discriminazioni contro gli ebrei",
          spiegazione:
            "Le leggi razziali fasciste del 1938 introdussero discriminazioni legali contro gli ebrei in Italia, limitando i loro diritti civili, professionali ed economici. Queste leggi segnarono un'inversione della politica precedente del regime nei confronti degli ebrei e furono il preludio alla persecuzione e alla deportazione degli ebrei italiani durante la Seconda Guerra Mondiale.",
          img: "https://www.museoantropologia.unito.it/wp-content/uploads/2018/07/Corriere_testata_1938_1.jpg",
        },
      ],
      img: assets.sto_7,
    },
    {
      capitolo: 8,
      titolo: "La crisi del ‘29 e l’America di Roosevelt",
      argomenti: [
        {
          titolo: "Gli “anni ruggenti”",
          spiegazione:
            "Gli 'anni ruggenti' furono un periodo di prosperità economica, crescita industriale e cambiamento sociale negli Stati Uniti degli anni '20. La società americana conobbe una fervida attività culturale, con lo sviluppo del jazz, del cinema e della letteratura, ma anche un'eccessiva speculazione finanziaria e un aumento delle disuguaglianze sociali.",
          img: "https://www.puntidifuga.net/wp-content/uploads/2021/04/economia-640x381.jpg",
        },
        {
          titolo:
            "La fine di un’epoca: il crollo di Wall Street e la grande depressione",
          spiegazione:
            "Il crollo di Wall Street del 1929 segnò l'inizio della Grande Depressione, la più grave crisi economica del XX secolo. Il crollo dei mercati finanziari portò a un collasso del sistema bancario, a una disoccupazione di massa e a una contrazione drammatica della produzione industriale, con conseguenze devastanti per l'economia globale.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNCzbKQC1M3B-L4CZzgnMVR3XD72tEkRoolxoOQwZW0w&s",
        },
        {
          titolo: "Il New Deal di Roosevelt",
          spiegazione:
            "Il New Deal fu un programma di riforme e interventi governativi introdotto dal presidente americano Franklin D. Roosevelt per affrontare la Grande Depressione. Il New Deal comprendeva una serie di misure per stimolare l'economia, creare posti di lavoro, proteggere i risparmi dei cittadini, riformare il sistema finanziario e fornire assistenza sociale ai più bisognosi.",
          img: "https://www.biografiasyvidas.com/biografia/r/fotos/roosevelt_franklin_3.jpg",
        },
        {
          titolo: "L’interventismo dello stato",
          spiegazione:
            "Il New Deal segnò un cambiamento significativo nel ruolo dello Stato nell'economia americana, con un maggiore intervento governativo per stabilizzare l'economia e proteggere i cittadini dalla povertà e dalla disoccupazione. Il governo federale assunse un ruolo attivo nel regolare l'attività economica, nel promuovere la riforma sociale e nel fornire servizi pubblici.",
          img: "https://upload.wikimedia.org/wikipedia/it/a/af/Manifestazione_interventista_piazza_Cordusio_a_Milano_%281915%29.jpg",
        },
      ],
      img: assets.sto_8,
    },
    {
      capitolo: 9,
      titolo: "Il regime di Stalin in Unione Sovietica",
      argomenti: [
        {
          titolo: "La nascita dell’Unione Sovietica",
          spiegazione:
            "L'Unione Sovietica nacque nel 1922 dalla fusione delle repubbliche socialiste russe, ucraine, bielorusse e transcaucasiche. La fondazione dell'URSS segnò l'inizio di un nuovo ordine politico, economico e sociale basato sull'ideologia comunista e sull'egemonia del Partito Comunista guidato da Lenin e poi da Stalin.",
          img: "https://g.acdn.no/obscura/API/dynamic/r1/ece5/tr_2000_2000_s_f/0000/nndb/2022/2/18/9/NTB_m1Cpwt7VUaU.jpg?chk=F70952",
        },
        {
          titolo: "L’ascesa al potere di Stalin",
          spiegazione:
            "Dopo la morte di Lenin nel 1924, Stalin emerse come il leader incontrastato del Partito Comunista e dell'Unione Sovietica. Utilizzando tattiche politiche astute e spesso brutali, Stalin consolidò il suo potere, eliminando gli oppositori politici, controllando l'apparato del partito e instaurando un regime di terrore e repressione.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJLdKnYeEIjCtzaX-4PlQRDG7hMT08woCgGeCgGIpCA&s",
        },
        {
          titolo: "La collettivizzazione",
          spiegazione:
            "La collettivizzazione agricola fu una politica economica introdotta da Stalin per trasformare le piccole proprietà agricole in coltivazioni collettive controllate dallo Stato. Questa politica portò a una rapida industrializzazione dell'Unione Sovietica, ma causò anche carestie, disordini e milioni di morti.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYy1nvyPvQHOffCfT4WJPY4RMk3ENSea32ICBktQmc7w&s",
        },
        {
          titolo: "L’industria ed i piani quinquennali",
          spiegazione:
            "Per modernizzare e industrializzare l'Unione Sovietica, Stalin introdusse i piani quinquennali, una serie di programmi economici pianificati centralmente per sviluppare l'industria pesante, le infrastrutture e le risorse naturali del paese. Questi piani portarono a una rapida crescita economica, ma anche a gravi violazioni dei diritti umani e a una repressione politica.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHmWH4_9pu9AmYCOau6-SvwhfMYRWmVWrxdSpSIPcDVQ&s",
        },
        {
          titolo: "Le connotazioni del regime sovietico",
          spiegazione:
            "Il regime di Stalin in Unione Sovietica fu caratterizzato da un controllo totalitario dello Stato sulla società e l'economia, con un culto della personalità intorno a Stalin, la censura dei media, la repressione delle opposizioni politiche e la sistematica violazione dei diritti umani. Questo regime portò a un'espansione del potere statale e a una limitazione delle libertà individuali.",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/After_Lenin_Speech_1920.jpg/300px-After_Lenin_Speech_1920.jpg",
        },
        {
          titolo: "Il terrore staliniano",
          spiegazione:
            "Il terrore staliniano fu una campagna di repressione politica e sociale attuata dal regime di Stalin per eliminare gli oppositori politici e consolidare il suo potere. Questa campagna comprendeva arresti di massa, processi politici farsa, deportazioni, lavori forzati nei gulag e esecuzioni sommarie, con milioni di vittime.",
          img: "https://www.sitocomunista.it/Immagini/stalinismo/stalin_gulag.jpg",
        },
      ],
      img: assets.sto_9,
    },
    {
      capitolo: 10,
      titolo: "La Germania nazista",
      argomenti: [
        {
          titolo: "L’epilogo della Repubblica di Weimar",
          spiegazione:
            "La Repubblica di Weimar, nata nel 1919 in seguito alla sconfitta tedesca nella Prima Guerra Mondiale, si concluse con l'ascesa di Adolf Hitler al potere nel 1933. Caratterizzata da instabilità politica, crisi economica e violenza politica, la Repubblica di Weimar fu indebolita dalla polarizzazione ideologica e dalle difficoltà socio-economiche.",
          img: "https://www.studiarapido.it/wp-content/uploads/2016/11/weimar.jpg",
        },
        {
          titolo: "La scalata al potere di Hitler",
          spiegazione:
            "Adolf Hitler salì al potere attraverso una combinazione di abilità politica, manipolazione mediatica e repressione violenta. Utilizzando il malcontento sociale, il nazionalismo e l'antisemitismo, Hitler consolidò il suo potere eliminando gli oppositori politici e creando un regime totalitario.",
          img: "https://cdn.studenti.stbm.it/images/2020/12/03/adolf-hitler_600x400.jpeg",
        },
        {
          titolo: "I primi provvedimenti del regime",
          spiegazione:
            "Una volta salito al potere, il regime nazista intraprese una serie di provvedimenti per consolidare il controllo dello Stato e per perseguire la sua agenda ideologica. Questi provvedimenti includevano la soppressione delle libertà civili, la creazione di organizzazioni paramilitari come le SS e la Gestapo, e la promulgazione di leggi discriminatorie contro gli ebrei.",
          img: "https://images.cgil.it/view/acePublic/alias/contentid/YjE1MjRmYzMtMTU5Ny00/0/image_1409387.webp?f=3%3A2&q=0.75&w=3840",
        },
        {
          titolo: "La dittatura totalitaria del Terzo Reich",
          spiegazione:
            "Il Terzo Reich di Hitler fu un regime totalitario caratterizzato dalla concentrazione del potere nelle mani del Führer, dalla propaganda di massa, dalla repressione politica e dalla persecuzione delle minoranze. La dittatura nazista controllava ogni aspetto della vita pubblica e privata, imponendo l'adesione al partito nazista e la conformità ideologica.",
          img: "https://encyclopedia.ushmm.org/images/large/4e0a8d54-0638-43fa-8156-2cdd533de5f0.jpg",
        },
        {
          titolo: "L’antisemitismo",
          spiegazione:
            "L'antisemitismo fu un pilastro fondamentale dell'ideologia nazista e della politica del Terzo Reich. Basato su pregiudizi storici, culturali e razziali, l'antisemitismo nazista portò alla persecuzione sistematica degli ebrei, culminando nell'Olocausto, durante il quale milioni di ebrei furono perseguitati, imprigionati e uccisi nei campi di concentramento.",
          img: "https://encyclopedia.ushmm.org/images/large/2b450bc6-dd84-4463-b4b3-8d281995daed.jpg",
        },
      ],
      img: assets.sto_10,
    },
    {
      capitolo: 11,
      titolo: "Verso la catastrofe",
      argomenti: [
        {
          titolo: "Il riarmo della Germania nazista",
          spiegazione:
            "Dopo la presa del potere da parte di Hitler, la Germania nazista iniziò un programma di riarmo segreto e una politica di espansione territoriale. Queste azioni infransero i trattati internazionali e alimentarono le tensioni con le potenze alleate.",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Bundesarchiv_Bild_101I-343-0694-21%2C_Belgien-Frankreich%2C_Flugzeug_Heinkel_He_111.jpg/300px-Bundesarchiv_Bild_101I-343-0694-21%2C_Belgien-Frankreich%2C_Flugzeug_Heinkel_He_111.jpg",
        },
        {
          titolo: "La guerra civile in Spagna",
          spiegazione:
            "La guerra civile spagnola fu un conflitto politico e ideologico che scoppiò nel 1936 e durò fino al 1939. Oppositori repubblicani e franchisti si scontrarono per il controllo del governo spagnolo, con il coinvolgimento di forze esterne come Italia e Germania nazista in sostegno ai franchisti e dell'Unione Sovietica in sostegno ai repubblicani.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMeLN3v2jRC5EjvivbMcDR63hf5Tqbo2hoklMiYujpqA&s",
        },
        {
          titolo: "Le premesse di un nuovo conflitto",
          spiegazione:
            "Gli eventi degli anni '30, tra cui la politica aggressiva di Hitler, il riarmo tedesco, le tensioni internazionali e i conflitti regionali come la guerra civile spagnola, crearono le premesse per lo scoppio di un nuovo conflitto mondiale. Il mondo si trovava sull'orlo della catastrofe.",
          img: "https://www.focus.it/images/2023/07/05/guerra-civile-spagnola---madrid_1020x680.jpg",
        },
      ],
      img: assets.sto_11,
    },
    {
      capitolo: 12,
      titolo: "La seconda guerra mondiale",
      argomenti: [
        {
          titolo: "L’invasione della Polonia e la disfatta della Francia",
          spiegazione:
            "L'invasione della Polonia da parte della Germania nazista nel settembre 1939 segnò l'inizio della Seconda Guerra Mondiale. La rapida avanzata tedesca, resa possibile dalla tattica della Blitzkrieg, portò alla disfatta della Polonia e successivamente alla caduta della Francia nel 1940.",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Danzig_Police_at_Polish_Border_%281939-09-01%29.jpg/1200px-Danzig_Police_at_Polish_Border_%281939-09-01%29.jpg",
        },
        {
          titolo: "Le prime difficoltà per l’Asse",
          spiegazione:
            "Nonostante le vittorie iniziali, l'Asse (Germania, Italia e Giappone) iniziò a incontrare difficoltà durante la guerra. L'Inghilterra resistette ai bombardamenti tedeschi durante la Battaglia d'Inghilterra, mentre la Germania si scontrò con la resistenza sovietica durante l'invasione dell'Unione Sovietica.",
          img: "https://img-prod.ilfoglio.it/2020/09/05/235341289-0aa6fa3e-f58c-44c3-b518-bd9ba591df2c.jpg",
        },
        {
          titolo: "L’Operazione Barbarossa contro l’Unione Sovietica",
          spiegazione:
            "L'Operazione Barbarossa, l'invasione nazista dell'Unione Sovietica avviata nel giugno 1941, fu un momento cruciale della Seconda Guerra Mondiale. Nonostante iniziali successi, l'offensiva tedesca si arenò davanti a Mosca e portò a una guerra di logoramento che indebolì entrambe le forze.",
          img: "https://www.ilpost.it/wp-content/uploads/2021/06/operazione-barbarossa.jpg",
        },
        {
          titolo:
            "L’attacco giapponese a Pearl Harbor e l’ingresso in guerra degli USA",
          spiegazione:
            "L'attacco giapponese a Pearl Harbor il 7 dicembre 1941 segnò l'entrata degli Stati Uniti nella Seconda Guerra Mondiale. Questo attacco portò gli Stati Uniti a dichiarare guerra al Giappone e alle potenze dell'Asse, trasformando il conflitto in una guerra mondiale su vasta scala.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwhNNKtS1CcApjdNraBZ0b1dQP5kJmIQedCgBN-CupQ&s",
        },
        {
          titolo: "La svolta nel conflitto",
          spiegazione:
            "La svolta nel conflitto avvenne nel 1942-1943 con le vittorie alleate in Nord Africa e la sconfitta delle forze dell'Asse a Stalingrado. Questi eventi segnarono un punto di svolta nella guerra, ribaltando il momentum a favore degli Alleati.",
          img: "https://www.lacittafutura.it/media/k2/items/cache/ee16eacb2ab3f2b8582859b8cc34ab8e_XL.jpg",
        },
        {
          titolo: "La caduta del fascismo. L’armistizio e la guerra in Italia",
          spiegazione:
            "La caduta del fascismo in Italia avvenne nel 1943 con l'arresto di Mussolini e l'instaurazione di un governo provvisorio. L'armistizio dell'8 settembre 1943 portò all'occupazione tedesca dell'Italia settentrionale e allo scoppio di una guerra civile tra partigiani e truppe tedesche.",
          img: "https://contropiano.org/img/2018/07/28-Foto-album-01-1.jpg",
        },
        {
          titolo: "Dallo sbarco in Normandia alla sconfitta tedesca",
          spiegazione:
            "Lo sbarco in Normandia del giugno 1944 segnò l'inizio dell'invasione alleata dell'Europa occidentale. Questa operazione, conosciuta come D-Day, portò alla liberazione della Francia e all'avanzata degli Alleati in Europa, culminando nella sconfitta tedesca nel maggio 1945.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwvdC43UkRAoV4hHigWr_d31VWBWC0DNTqtL10VrX1rA&s",
        },
        {
          titolo: "La bomba atomica e la resa del Giappone",
          spiegazione:
            "L'uso delle bombe atomiche su Hiroshima e Nagasaki da parte degli Stati Uniti nel agosto 1945 portò alla resa del Giappone, segnando la fine della Seconda Guerra Mondiale nel teatro del Pacifico. Questi eventi ebbero un impatto duraturo sulla storia mondiale e sulle politiche di sicurezza internazionale.",
          img: "https://www.storicang.it/medio/2021/07/30/una-citta-in-macerie_160667de_1500x1073.jpg",
        },
      ],
      img: assets.sto_12,
    },
    {
      capitolo: 13,
      titolo: "L’Italia spaccata in due",
      argomenti: [
        {
          titolo: "Il Neofascismo di Salò",
          spiegazione:
            "Il periodo della Repubblica Sociale Italiana, nota come Neofascismo di Salò, fu caratterizzato dalla dittatura fascista nella parte settentrionale dell'Italia, sotto il controllo di Mussolini e dell'Asse. Questo periodo vide la continuazione della repressione politica e delle violazioni dei diritti umani.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjY4YZ-oPdJ2HwP4J-DrJlbRGkOLHAMnDAjg-pt2bx8g&s",
        },
        {
          titolo:
            "La ricostituzione dei partiti antifascisti e il movimento partigiano",
          spiegazione:
            "Dopo la caduta del regime fascista, in Italia si assistette alla ricostituzione dei partiti antifascisti e all'organizzazione del movimento partigiano. Queste forze combatterono per la liberazione del Paese dall'occupazione tedesca e per l'instaurazione di un nuovo governo democratico.",
          img: "https://www.shalom.it/wp-content/uploads/2021/08/fasx.jpg",
        },
        {
          titolo: "Le operazioni militari e la liberazione",
          spiegazione:
            "Le operazioni militari degli Alleati, supportate dal movimento partigiano, portarono alla liberazione dell'Italia dall'occupazione nazista. Dalle regioni settentrionali a quelle meridionali, le truppe alleate avanzarono liberando città e combattendo le forze tedesche in ritirata.",
          img: "https://www.reportdifesa.it/wp-content/uploads/2021/04/38fbdeda-e9a7-4f55-bab0-e6f94b52bef8-860x450.jpg",
        },
        {
          titolo: "L’Italia occupata",
          spiegazione:
            "Dopo l'armistizio dell'8 settembre 1943, l'Italia fu occupata dalle forze tedesche nella parte settentrionale e centrale del Paese, mentre la parte meridionale passò sotto il controllo delle forze alleate. Questo periodo fu caratterizzato da repressione, resistenza e lotta per la liberazione.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvvbpuU_E6Ol93FUzQvFcFhJcjIN14VgdxqCjem0pjvw&s",
        },
      ],
      img: assets.sto_13,
    },
    {
      capitolo: 14,
      titolo: "Un mondo diviso in due blocchi",
      argomenti: [
        {
          titolo: "Le nuove organizzazioni mondiali",
          spiegazione:
            "Dopo la Seconda Guerra Mondiale, emersero nuove organizzazioni internazionali come le Nazioni Unite e il Fondo Monetario Internazionale, che cercarono di promuovere la cooperazione e la pace tra le nazioni.",
          img: "https://staticgeopop.akamaized.net/wp-content/uploads/sites/32/2023/10/1200px-UN_meeting_on_environment_at_General_Assembly.jpg?im=AspectCrop=(16,9);",
        },
        {
          titolo: "La contrapposizione USA/URSS",
          spiegazione:
            "La contrapposizione tra Stati Uniti e Unione Sovietica divenne la caratteristica dominante della politica mondiale dopo la Seconda Guerra Mondiale. Questo confronto, noto come Guerra Fredda, si manifestò attraverso competizione politica, economica e militare su scala globale.",
          img: "https://media.istockphoto.com/id/686359674/it/vettoriale/bandiera-dellunione-sovietica-e-degli-stati-uniti-insieme-con-consistenza-del-suolo.jpg?s=612x612&w=0&k=20&c=8aZcCbaVY7cRvPAr6lKUMQyAiHFI29M_s1gQN-94uaA=",
        },
        {
          titolo: "La formazione dei due blocchi",
          spiegazione:
            "Durante la Guerra Fredda, il mondo si divise in due blocchi contrapposti: il blocco occidentale guidato dagli Stati Uniti e il blocco orientale guidato dall'Unione Sovietica. Questi due blocchi si scontrarono su questioni ideologiche, economiche e territoriali.",
          img: "https://images2.corriereobjects.it/methode_image/2017/04/14/Cultura/Foto%20Cultura/01-AP_420622035.jpg?v=201704141600",
        },
        {
          titolo: "Le due Germanie",
          spiegazione:
            "La divisione della Germania in due stati separati, la Repubblica Federale di Germania (Ovest) e la Repubblica Democratica Tedesca (Est), rappresentò una delle manifestazioni più evidenti della divisione del mondo durante la Guerra Fredda.",
          img: "https://storiaestorie.altervista.org/blog/wp-content/uploads/2013/05/Berlino-divisa.jpg",
        },
        {
          titolo: "La decolonizzazione",
          spiegazione:
            "Dopo la Seconda Guerra Mondiale, molte colonie in Africa, Asia e America Latina ottennero l'indipendenza dai loro colonizzatori europei. Questo processo, noto come decolonizzazione, portò a profondi cambiamenti politici, sociali ed economici nel mondo.",
          img: "https://cdn.studenti.stbm.it/images/2018/08/08/truppe-israeliane-invadono-l-egitto-durante-la-crisi-di-suez-orig.jpeg",
        },
      ],
      img: assets.sto_14,
    },
    {
      capitolo: 15,
      titolo: "Gli anni della “coesistenza competitiva” e il Sessantotto",
      argomenti: [
        {
          titolo: "Chruscev e gli equilibri internazionali",
          spiegazione:
            "Il periodo della coesistenza competitiva vide una serie di negoziati e confronti tra Stati Uniti e Unione Sovietica sotto la guida di leader come Nikita Chruscev. Questi negoziati spesso portavano a momenti di tensione e crisi, come la Crisi dei missili di Cuba.",
          img: "https://pilloledistoriaefilosofia.files.wordpress.com/2022/04/kruscev-1.jpg?w=474",
        },
        {
          titolo: "La nascita della CEE",
          spiegazione:
            "La Comunità Economica Europea (CEE), fondata nel 1957, fu un'organizzazione che mirava a promuovere la cooperazione economica tra i suoi membri. La CEE segnò un passo importante verso l'integrazione europea e contribuì alla stabilità e alla prosperità del continente.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQudFpKCsiWpJNeDcNfIdGAd2pSqSacLk2ElDvRtDt79w&s",
        },
        {
          titolo: "L’America latina e la rivoluzione cubana",
          spiegazione:
            "L'America latina visse un periodo di turbolenza politica e sociale negli anni '60, con movimenti di protesta e rivoluzioni contro regimi autoritari e oligarchici. La rivoluzione cubana, guidata da Fidel Castro, ebbe un impatto significativo sulla politica regionale e internazionale.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0A9spJU8yTWkcgm5gfAOJBiRNROVdRj8zcOJsDHiECg&s",
        },
        {
          titolo: "Gli USA di Kennedy",
          spiegazione:
            "L'amministrazione Kennedy negli Stati Uniti fu caratterizzata da una politica estera attiva e dalla promozione dei diritti civili. Kennedy affrontò sfide come la Crisi dei missili di Cuba e sostenne movimenti per i diritti civili negli Stati Uniti.",
          img: "https://www.ilsussidiario.net/wp-content/uploads/2018/07/15/jfk_kennedy_coloriR439-438x300.jpg.webp",
        },
        {
          titolo: "La guerra del Vietnam",
          spiegazione:
            "La guerra del Vietnam fu uno dei conflitti più divisivi e traumatici degli anni '60 e '70. Coinvolgendo gli Stati Uniti come parte della loro politica di contenimento del comunismo, la guerra vide il coinvolgimento di forze vietnamite comuniste e la resistenza da parte dei ribelli vietnamiti del Sud.",
          img: "https://cdn.studenti.stbm.it/images/2021/06/08/guerra-del-vietnam-orig.jpeg",
        },
      ],
      img: assets.sto_15,
    },
    {
      capitolo: 16,
      titolo: "L’Italia dalla ricostruzione al Sessantotto",
      argomenti: [
        {
          titolo: "Il Paese all’indomani della guerra",
          spiegazione:
            "Dopo la Seconda Guerra Mondiale, l'Italia si trovò di fronte a enormi sfide economiche, sociali e politiche. La ricostruzione post-bellica portò a una rinascita economica, ma anche a tensioni sociali e politiche legate alla lotta tra forze di sinistra e di destra.",
          img: "https://www.rainews.it/dl/img/2023/10/06/1696593683766_XKM.jpg",
        },
        {
          titolo: "La rinascita dei partiti",
          spiegazione:
            "Dopo la caduta del regime fascista, in Italia si assistette alla rinascita dei partiti politici, inclusi quelli di ispirazione liberale, socialista e comunista. Questi partiti si impegnarono nella costruzione di un nuovo assetto politico e nella difesa dei valori democratici.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm7cmnP-BAwr60p-i1aY2BuyKTD_UdZP8mF5oRTExcZQ&s",
        },
        {
          titolo: "L’avvio della stagione democratica",
          spiegazione:
            "Con l'approvazione della Costituzione nel 1948, l'Italia avviò una stagione democratica caratterizzata dalla pluralità politica, dal rispetto dei diritti civili e dalla partecipazione popolare. Questo periodo segnò una svolta importante nella storia politica del Paese.",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Trento_3_novembre_1918.jpg/330px-Trento_3_novembre_1918.jpg",
        },
        {
          titolo: "La Costituzione e le istituzioni repubblicane",
          spiegazione:
            "La Costituzione Italiana del 1948 stabilì i principi fondamentali dello Stato italiano, tra cui la separazione dei poteri, il federalismo, e il riconoscimento dei diritti fondamentali dei cittadini. Questo documento rimane il pilastro della democrazia italiana.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-oZdfvQg6ODEb_dZajO0P4cjXUaNDnJxdrwdk8uSNw&s",
        },
        {
          titolo: "Il miracolo economico",
          spiegazione:
            "Negli anni '50 e '60, l'Italia visse un periodo di rapida crescita economica noto come il miracolo economico. Grazie a politiche di sviluppo industriale, investimenti pubblici e integrazione europea, l'Italia divenne una delle principali potenze economiche mondiali.",
          img: "https://www.ilriformista.it/wp-content/uploads/2020/11/olimpiadi-roma-900x600.jpg",
        },
      ],
      img: assets.sto_16,
    },
  ],
};

const italiano = {
  nome: "Italiano",
  docente: "Giulia Montesi",
  argomenti: [
    {
      titolo: "Il Naturalismo francese: Emile Zola L’Inizio dell’Ammazzatoio",
      img: assets.ita_1,
    },
    {
      titolo: "Il Verismo",
      img: assets.ita_2,
    },
    {
      titolo: "Giovanni Verga",
      argomenti: [
        {
          titolo: "Inizio e conclusione di Nedda",
          spiegazione:
            "Questo si riferisce all'inizio e alla conclusione del racconto 'Nedda' di Giovanni Verga. Il racconto narra la storia di una giovane donna di campagna che lotta contro le aspettative sociali e le difficoltà della vita rurale.",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Verga_-_Vita_dei_campi%2C_Treves%2C_1897_%28page_94_crop%29.jpg/450px-Verga_-_Vita_dei_campi%2C_Treves%2C_1897_%28page_94_crop%29.jpg",
        },
        {
          titolo: "Rosso Malpelo",
          spiegazione:
            "Rosso Malpelo è uno dei racconti più famosi di Giovanni Verga. Narra la storia di un ragazzo emarginato e discriminato dalla società a causa del suo aspetto e della sua origine sociale. Il racconto esplora temi come l'ingiustizia sociale, la povertà e la crudeltà umana.",
          img: "https://cdn.skuola.net/news_foto/2018/verga-rosso-malpelo.jpg",
        },
        {
          titolo: "La roba",
          spiegazione:
            "La Roba è un romanzo di Giovanni Verga che descrive la lotta per il potere e il possesso in una comunità siciliana. Il termine 'roba' si riferisce alla proprietà, in particolare alla terra e ai beni materiali, che diventa oggetto di desiderio e conflitto tra i personaggi.",
          img: "https://www.giovannifighera.it/wp-content/uploads/2017/07/riassunti-sui-vinti-di-verga.jpg",
        },
        {
          titolo: "La Giornata di Gesualdo",
          spiegazione:
            "Questo si riferisce al racconto 'La Giornata di Gesualdo' di Giovanni Verga. Il racconto segue la giornata di un contadino siciliano di nome Gesualdo e riflette sulle sue esperienze, emozioni e relazioni all'interno della sua comunità.",
          img: "https://cdn.skuola.net/news_foto/2016/mastro-don-gesualdo.jpg",
        },
        {
          titolo: "La morte di Gesualdo",
          spiegazione:
            "Questo si riferisce alla morte del personaggio Gesualdo nel racconto omonimo di Giovanni Verga. La morte di Gesualdo rappresenta un momento significativo nel racconto, con implicazioni emotive e simboliche per la storia e i personaggi coinvolti.",
          img: "https://cdn.skuola.net/w1200h687/news_foto/2018/mastro-don-gesualdo-giovanni-verga.JPG",
        },
        {
          titolo: "La prefazione ai Malavoglia",
          spiegazione:
            "La prefazione ai Malavoglia è un'introduzione scritta da Giovanni Verga che precede il romanzo 'I Malavoglia'. In essa, Verga fornisce una panoramica sulla storia e i personaggi del romanzo, oltre a condividere le sue riflessioni sull'importanza della verità e della realtà nella narrativa.",
          img: "https://liberliber.it/wp-content/uploads/2015/03/i_malavoglia.jpg",
        },
        {
          titolo: "L’inizio dei Malavoglia",
          spiegazione:
            "L'inizio dei Malavoglia si riferisce al primo capitolo del romanzo 'I Malavoglia' di Giovanni Verga. Questo capitolo stabilisce il contesto e presenta i personaggi principali della famiglia Malavoglia, situata in una piccola comunità di pescatori in Sicilia.",
          img: "https://mydbook.giuntitvp.it/app/statics/contents/books/GIAC01_G0181306A/html/187/assets/images/187_a.jpg",
        },
        {
          titolo: "L’addio di ‘Ntoni",
          spiegazione:
            "L’addio di ‘Ntoni si riferisce a un momento chiave nel romanzo 'I Malavoglia' di Giovanni Verga. 'Ntoni' è uno dei membri della famiglia Malavoglia e il suo addio rappresenta un punto di svolta nella narrazione, con conseguenze significative per la famiglia e la comunità.",
          img: "https://diariodicharlotte.com/wp-content/uploads/2020/05/ntoni.jpg",
        },
      ],
      img: assets.ita_3,
    },
    {
      titolo: "La Scapigliatura",
      spiegazione:
        "La Scapigliatura è un movimento letterario e artistico che emerse in Italia nel XIX secolo. Si caratterizzava per il suo atteggiamento anticonformista e ribelle nei confronti della società e della cultura borghese dell'epoca.",
      img: assets.ita_4,
    },
    {
      "titolo": "Giovanni Pascoli",
      "vita": "Giovanni Pascoli (1855-1912) è stato un poeta e accademico italiano, uno dei maggiori esponenti della letteratura italiana del tardo Ottocento e del primo Novecento. Nato a San Mauro di Romagna (oggi San Mauro Pascoli), Pascoli ebbe un'infanzia segnata da tragedie familiari, inclusa l'uccisione del padre, un evento che influenzò profondamente la sua poesia. Studioso appassionato e docente universitario, Pascoli esplorò temi come l'infanzia, la natura, il lutto e la memoria, combinando un linguaggio semplice e diretto con una profondità emotiva e simbolica. La sua visione poetica, influenzata dalla filosofia del simbolismo e del decadentismo, enfatizza l'importanza delle piccole cose e dei sentimenti nascosti.",
      "argomenti": [
        {
          "titolo": "Il Fanciullino",
          "spiegazione": "Il Fanciullino è una raccolta di poesie di Giovanni Pascoli che esplora il tema dell'infanzia e la perdita dell'innocenza. Le poesie riflettono sui ricordi dell'infanzia e sull'ingenuità della giovinezza. Secondo Pascoli, il poeta deve conservare dentro di sé il 'fanciullino', ovvero quella parte di sé che percepisce il mondo con meraviglia e stupore, capace di vedere oltre l'apparenza delle cose. Il fanciullino è simbolo di purezza e di una visione del mondo non contaminata dalla razionalità adulta. I temi fondamentali comprendono la nostalgia, la semplicità e l'importanza di mantenere una connessione con il proprio io interiore.",
          "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTza3r0ipK51oisyADHsMqJqI8b78rLxT2KH3yD5bCvzQ&s",
          "testi": [
            {
              "titolo": "Il Fanciullino - Estratto",
              "testo": "È dentro noi un fanciullino che non solo ha brividi... È un fanciullino che continua a stupirsi del mondo."
            }
          ]
        },
        {
          "titolo": "Lavandare",
          "spiegazione": "Lavandare è una poesia di Giovanni Pascoli che celebra il lavoro delle donne che lavano i panni nei fiumi. La poesia evoca immagini di semplicità e bellezza nella vita quotidiana. Pascoli usa un linguaggio semplice e musicale per descrivere le donne al lavoro, evidenziando il loro ruolo nella comunità rurale e il loro legame con la natura. I temi fondamentali comprendono la dignità del lavoro, la comunione con la natura e la bellezza nascosta nelle attività quotidiane. Pascoli riesce a trasformare una scena di vita comune in un momento di riflessione poetica e armonia.",
          "img": "https://www.libriantichionline.com/typo3temp/pics/78fa9027dc.jpg",
          "testi": [
            {
              "titolo": "Lavandare - Estratto",
              "testo": "Nei fiumi d'autunno, le donne lavavano, con mani e con schiene, i panni... cantavano piano, le lavandaie, con voci leggere come piume."
            }
          ]
        },
        {
          "titolo": "X Agosto",
          "spiegazione": "X Agosto è una poesia di Giovanni Pascoli dedicata al ricordo della morte tragica di suo padre, avvenuta nell'agosto del 1867. La poesia esplora il tema del lutto e della perdita. Attraverso immagini simboliche e un tono malinconico, Pascoli esprime il dolore e l'ingiustizia della morte prematura, associandola a un evento cosmico come la pioggia di stelle cadenti di San Lorenzo. I temi fondamentali comprendono il dolore personale, l'ingiustizia della morte, la memoria e il legame con la figura paterna. Pascoli utilizza la natura come specchio delle sue emozioni interiori, creando un'atmosfera di tristezza e riflessione.",
          "img": "https://www.leggere-facile.it/wp-content/uploads/2018/08/x_agosto-700x400.jpg",
          "testi": [
            {
              "titolo": "X Agosto - Estratto",
              "testo": "San Lorenzo, io lo so perché tanto di stelle per l'aria tranquilla arde e cade, perché sì gran pianto nel concavo cielo sfavilla."
            }
          ]
        },
        {
          "titolo": "Temporale",
          "spiegazione": "Temporale è una poesia di Giovanni Pascoli che descrive l'atmosfera e le emozioni durante un temporale estivo. La poesia evoca sensazioni di ansia e meraviglia di fronte alla potenza della natura. Pascoli utilizza immagini vivide e un ritmo incalzante per trasmettere l'immediatezza e l'intensità dell'evento naturale. I temi fondamentali comprendono la forza della natura, il timore reverenziale verso gli elementi naturali e l'inevitabile senso di piccolezza dell'uomo di fronte a tali fenomeni. La poesia mette in risalto la capacità della natura di evocare emozioni profonde e complesse.",
          "img": "https://www.meteo.expert/wp-content/uploads/2018/11/iStock_000028466382_Medium.jpg",
          "testi": [
            {
              "titolo": "Temporale - Estratto",
              "testo": "Un bubbolìo lontano... Rosseggia l'orizzonte, come affocato, a mare; nero di pece, a monte; sembra voglia piovere e non piovere."
            }
          ]
        },
        {
          "titolo": "Novembre",
          "spiegazione": "Novembre è una poesia di Giovanni Pascoli che riflette sull'autunno e sulle sue associazioni con la malinconia e la fine. La poesia evoca immagini di tristezza e desolazione. Pascoli usa il mese di novembre come metafora del declino e della morte, in contrasto con la primavera che simboleggia la rinascita e la speranza. I temi fondamentali comprendono la transitorietà della vita, la ciclicità delle stagioni e la riflessione sulla morte. Pascoli riesce a creare un'atmosfera di quieta tristezza, facendo emergere il senso di inevitabile passaggio del tempo.",
          "img": "https://maremosso.lafeltrinelli.it/media/qtlf0f2s/novembre_banner.jpg?anchor=center&mode=crop&width=1500&height=784&rnd=133432435363500000",
          "testi": [
            {
              "titolo": "Novembre - Estratto",
              "testo": "Gèmmea l'aria, il sole così chiaro che tu ricerchi gli albicocchi in fiore, e del prunalbo l'odorino amaro senti nel cuore..."
            }
          ]
        },
        {
          "titolo": "Il lampo",
          "spiegazione": "Il lampo è una poesia di Giovanni Pascoli che descrive l'esperienza di vedere un lampo nel cielo notturno. La poesia evoca sensazioni di meraviglia e incertezza di fronte alla brevità e all'imprevedibilità della vita. Pascoli utilizza l'immagine del lampo per rappresentare momenti di illuminazione improvvisa e la fugacità delle emozioni e delle esperienze umane. I temi fondamentali comprendono la brevità della vita, l'epifania e il senso di mistero che circonda l'esistenza. La poesia, con la sua immagine potente e momentanea, invita alla riflessione sulla transitorietà della nostra percezione e delle nostre esperienze.",
          "img": "https://www.gennarocucciniello.it/gc/wp-content/uploads/2015/11/lampo.jpg",
          "testi": [
            {
              "titolo": "Il lampo - Estratto",
              "testo": "E cielo e terra si mostrò qual era: la terra ansante, livida, in sussulto; il cielo ingombro, tragico, disfatto..."
            }
          ]
        }
      ],
      "img": assets.ita_5
    },
    {
      titolo: "Gabriele D’Annunzio",
      argomenti: [
        {
          titolo: "Pastori",
          spiegazione:
            "Pastori è un'opera teatrale di Gabriele D'Annunzio che esplora temi di amore, passione e tradimento nella vita rurale italiana. La pièce è nota per la sua sensualità e la sua rappresentazione della natura.",
          img: "https://www.filastrocche.it/contenuti/wp-content/uploads/2018/05/pastore-550.jpg",
        },
      ],
      img: assets.ita_6,
    },
    {
      titolo: "Luigi Pirandello",
      argomenti: [
        {
          titolo: "L’umorismo",
          spiegazione:
            "L’umorismo è una raccolta di racconti di Luigi Pirandello che esplorano il tema dell'assurdità e della contraddizione nella vita quotidiana. I racconti sono caratterizzati da situazioni comiche e paradossali.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzrdCjR6ma6FBrzYdkjlet9gO0wj32bT2EVR2TCDdpLg&s",
        },
        {
          titolo: "La conclusione di Uno, nessuno, centomila",
          spiegazione:
            "La conclusione di Uno, nessuno, centomila è il momento in cui il protagonista, Vitangelo Moscarda, raggiunge una profonda consapevolezza di sé e delle sue molteplici identità. La conclusione riflette sui temi dell'identità e della percezione.",
          img: "https://cdn.skuola.net/w1200h687/news_foto/2015/uno-nessuno-centomila.jpg",
        },
        {
          titolo: "Il treno ha fischiato",
          spiegazione:
            "Il treno ha fischiato è un racconto di Luigi Pirandello che esplora il tema della ribellione individuale contro l'autorità e le convenzioni sociali. Il racconto riflette sul conflitto tra il desiderio di libertà e la paura delle conseguenze.",
          img: "https://cdn.studenti.stbm.it/images/2021/04/28/il-treno-ha-fischiato-orig.jpeg",
        },
        {
          titolo: "Ciaula scopre la luna",
          spiegazione:
            "Ciaula scopre la luna è un racconto di Luigi Pirandello che narra la storia di un ragazzo pastore che sogna di vedere la luna per la prima volta. Il racconto esplora il tema dell'aspirazione alla bellezza e alla libertà.",
          img: "https://cdn.studenti.stbm.it/images/2021/06/10/ciaula-scopre-la-luna-orig.jpeg",
        },
        {
          titolo: "Il Fu Mattia Pascal",
          spiegazione:
            "Il Fu Mattia Pascal è un romanzo di Luigi Pirandello che segue le vicende di Mattia Pascal, un uomo che decide di cambiare identità dopo essere stato dato per morto. Il romanzo esplora temi di identità, libertà e alienazione.",
          img: "https://lh3.googleusercontent.com/proxy/R9z6_ILU2ICPiK2Vbz8XYTyPR46ji41ty9UuMgfPo3kpYbL7IXRNnQcP_Q9IhgP6pc9ZSjQyqeDtCuxYmYf9o4ECoEmz_m9ZG1OwovYVmxfarXo-k1NivOzAlCtzzGFUQMXYQ7wxoCa8BIlaFieFhI2HCFKB7CB5ZRiH7jHsyO2VAVIGptiUDa5KcppjZuerhm88MxUG7mRWx4XYrCf2IKwMbEm_5ssjBqqoclLKPO_n25oNpDtASEIegpcagHtTF8RuJUvC4KBDgsCLkv--KUHDMKc4qd0zNqBED4JMAgtlLRJWP56bzCAoRSHPwNFfMqB6dkGF36K4gaJ-SzROvuK3kLZpmuoQA3I",
        },
        {
          titolo: "La patente",
          spiegazione:
            "La patente è un racconto di Luigi Pirandello che racconta la storia di un uomo che si mette nei guai dopo aver ottenuto una patente di guida. Il racconto esplora il tema della responsabilità e delle conseguenze delle proprie azioni.",
          img: "https://www.pirandelloweb.com/wp-content/uploads/2016/12/la-patente-novella.jpg",
        },
      ],
      img: assets.ita_7,
    },
    {
      titolo: "Italo Svevo",
      argomenti: [
        {
          titolo: "La Coscienza di Zeno",
          spiegazione:
            "La Coscienza di Zeno è un romanzo di Italo Svevo che narra le vicende di Zeno Cosini, un uomo nevrotico che cerca di smettere di fumare attraverso una serie di tentativi falliti. Il romanzo esplora temi di psicoanalisi, memoria e identità.",
          img: "https://bmliterature.altervista.org/blog/wp-content/uploads/2016/05/fumo.jpg",
        },
      ],
      img: assets.ita_8,
    },
    {
      titolo: "Giuseppe Ungaretti",
      argomenti: [
        {
          titolo: "In memoria",
          spiegazione:
            "In memoria è una poesia di Giuseppe Ungaretti che riflette sul tema della guerra e del sacrificio. La poesia evoca sentimenti di dolore e commozione di fronte alla perdita di vite umane.",
          img: "https://www.ilsecondomestiere.org/wp-content/uploads/2021/01/in-memoria-ungaretti.jpg",
        },
        {
          titolo: "Veglia",
          spiegazione:
            "Veglia è una poesia di Giuseppe Ungaretti che esplora il tema della solitudine e della notte. La poesia cattura l'atmosfera silenziosa e misteriosa della notte, invitando il lettore a riflettere sulla propria esistenza.",
          img: "https://www.booksofart.org/wp-content/uploads/2019/12/10418851_741472095945545_7842567081157505721_n.jpg",
        },
        {
          titolo: "Soldati",
          spiegazione:
            "Soldati è una poesia di Giuseppe Ungaretti che descrive l'esperienza dei soldati durante la guerra. La poesia cattura l'angoscia e il terrore della guerra, oltre alla fragilità della vita umana di fronte alla violenza e alla distruzione.",
          img: "https://cdn.studenti.stbm.it/images/2022/03/22/soldati_600x400.jpeg",
        },
        {
          titolo: "Fratelli",
          spiegazione:
            "Fratelli è una poesia di Giuseppe Ungaretti che riflette sul tema dell'amicizia e della fratellanza. La poesia esplora i legami profondi tra gli uomini e l'importanza della solidarietà nelle situazioni di crisi e di guerra.",
          img: "https://www.libriantichionline.com/typo3temp/pics/1c63073796.jpg",
        },
        {
          titolo: "San Martino del Carso",
          spiegazione:
            "San Martino del Carso è una poesia di Giuseppe Ungaretti che commemora i soldati caduti durante la Prima Guerra Mondiale. La poesia evoca immagini di desolazione e morte, riflettendo sulla tragedia della guerra e sul sacrificio dei giovani soldati.",
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWhuyLXOVKBPHtM-MC8TL_dVeoL1YXH8hEdb5ejmFKdx8xJBGp1uBUYvT2ipGiKxjezzruOMrkUBSdcGdX2vD5Dsqv6W7nPvEuc3N8lMGjdxKjNXLvgrZv4ywz-InpEc8TB0Tj0ABEsfQ/w1200-h630-p-k-no-nu/san+martino+del+carso2.jpg",
        },
        {
          titolo: "Mattina",
          spiegazione:
            "Mattina è una poesia di Giuseppe Ungaretti che celebra la bellezza e la rinascita della natura. La poesia evoca immagini di luce e speranza, invitando il lettore a contemplare la meraviglia del nuovo giorno.",
          img: "https://www.ilditonellocchio.it/wp-content/uploads/2015/01/mattina-di-ungaretti.jpg",
        },
        {
          titolo: "Natale",
          spiegazione:
            "Natale è una poesia di Giuseppe Ungaretti che riflette sul significato del Natale e sulla sua importanza nella tradizione cristiana. La poesia evoca sentimenti di gioia e spiritualità, celebrando la nascita di Gesù Cristo.",
          img: "https://www.studentville.it/app/uploads/2016/12/c4b43ae017af4001c5193d310bf00942.jpg",
        },
      ],
      img: assets.ita_9,
    },
    {
      titolo: "Salvatore Quasimodo",
      argomenti: [
        {
          titolo: "Ed è subito sera",
          spiegazione:
            "Ed è subito sera è una poesia di Salvatore Quasimodo che riflette sul tema dell'effimero e della transitorietà della vita. La poesia evoca immagini di tramonto e oscurità, invitando il lettore a riflettere sulla brevità dell'esistenza umana.",
          img: "https://img.fotocommunity.com/la-calma-della-sera-9f42a687-3d6b-48d3-b4f4-dcfced51986c.jpg?height=1080",
        },
        {
          titolo: "Milano, agosto 1943",
          spiegazione:
            "Milano, agosto 1943 è una poesia di Salvatore Quasimodo che ricorda i bombardamenti su Milano durante la Seconda Guerra Mondiale. La poesia cattura l'orrore e la distruzione della guerra, oltre alla resilienza e alla speranza del popolo milanese.",
          img: "https://www.studiarapido.it/wp-content/uploads/2016/08/agosto-1943-3.jpg",
        },
        {
          titolo: "Alle fronde dei salici",
          spiegazione:
            "Alle fronde dei salici è una poesia di Salvatore Quasimodo che celebra la bellezza e la quiete della natura. La poesia evoca immagini di pace e serenità, offrendo un momento di riflessione e contemplazione.",
          img: "https://www.book-tique.it/wp-content/uploads/2021/01/pexels-kaboompics-com-6057-scaled.jpg",
        },
        {
          titolo: "Uomo del mio tempo",
          spiegazione:
            "Uomo del mio tempo è una poesia di Salvatore Quasimodo che riflette sul tema dell'alienazione e della solitudine nell'era moderna. La poesia esplora il senso di disorientamento e smarrimento dell'individuo nella società contemporanea.",
          img: "https://www.sololibri.net/IMG/arton150879.jpg",
        },
      ],
      img: assets.ita_10,
    },
    {
      titolo: "Eugenio Montale",
      argomenti: [
        {
          titolo: "Non chiederci la parola",
          spiegazione:
            "Non chiederci la parola è una poesia di Eugenio Montale che riflette sul tema della comunicazione e del silenzio. La poesia evoca immagini di sospensione e mistero, invitando il lettore a riflettere sul significato del non detto.",
          img: "https://libreriamo.it/wp-content/uploads/2021/10/Progetto-senza-titolo11-3.jpg",
        },
        {
          titolo: "Meriggiare pallido e assorto",
          spiegazione:
            "Meriggiare pallido e assorto è una poesia di Eugenio Montale che celebra la bellezza e la quiete del meriggio. La poesia evoca immagini di pace e serenità, offrendo un momento di contemplazione e riflessione.",
          img: "https://www.bisceglia.eu/wp-content/uploads/2022/02/cocci_2-scaled.jpg",
        },
        {
          titolo: "Spesso il male di vivere ho incontrato",
          spiegazione:
            "Spesso il male di vivere ho incontrato è una poesia di Eugenio Montale che riflette sul tema del dolore e della sofferenza. La poesia esplora il senso di disillusione e smarrimento di fronte alle difficoltà della vita.",
          img: "https://www.libriantichionline.com/typo3temp/pics/371ee92525.jpg",
        },
      ],
      img: assets.ita_11,
    },
    {
      titolo: "Primo Levi",
      argomenti: [
        {
          titolo: "Se questo è un uomo",
          spiegazione:
            "Se questo è un uomo è un libro di Primo Levi che narra la sua esperienza nei campi di concentramento durante l'Olocausto. Il libro riflette sul tema della sopravvivenza, della dignità umana e del male assoluto.",
          img: "https://www.corriere.it/methode_image/2019/07/30/Cultura/Foto%20Cultura%20-%20Trattate/se-questo-e-un-uomo----pietro-scarnera-k11f-u313011944597957kd-656x492corriere-web-sezioni_MASTER.jpg",
        },
      ],
      img: assets.ita_12,
    },
    {
      titolo: "Italo Calvino",
      argomenti: [
        {
          titolo: "Cosimo sugli alberi",
          spiegazione:
            "Cosimo sugli alberi è un romanzo di Italo Calvino che narra la storia di un giovane aristocratico che decide di trascorrere la sua vita sugli alberi. Il romanzo esplora il tema della libertà individuale e dell'immaginazione creativa.",
          img: "https://www.ilpost.it/wp-content/uploads/2016/04/cosimo-evidenza.jpg",
        },
      ],
      img: assets.ita_13,
    },
  ],
};

const educazioneCivica = {
  nome: "IO NON PARTECIPO ALLA GUERRA, E’LA GUERRA CHE PARTECIPA A ME",
  materia: "Educazione Civica",
  argomenti: [
    {
      capitolo: 0,
      titolo: "Manipolazione dell'Informazione e Propaganda",
      paragrafi: [
        {
          id: 1,
          testo: "Cari colleghi e amici, ",
        },
        {
          id: 2,
          testo:
            "Mi trovo qui oggi per discutere una questione di estrema importanza: la possibile partecipazione del nostro paese a un conflitto armato. Voglio iniziare con una citazione di Jurij Levitanskij: 'Io non partecipo alla guerra, è la guerra che partecipa a me.' Questa affermazione racchiude una verità profonda: la guerra non è un evento isolato che coinvolge solo i soldati al fronte, ma una realtà che permea ogni aspetto della nostra vita e della nostra società.",
        },
      ],
      img: "",
    },
    {
      capitolo: 1,
      titolo: "Manipolazione dell'Informazione e Propaganda",
      paragrafi: [
        {
          id: 1,
          testo:
            "la propaganda è un mezzo volto a conquistare il favore e l'adesione di un pubblico sempre più vasto mediante ogni mezzo idoneo a influire sulla psicologia collettiva e sul comportamento delle masse. Questo strumento viene ampiamente utilizzato specialmente in politica e può avere un ruolo manipolatorio sull’opinione pubblica causando estremismi e polarizzazione della società.",
        },
        {
          id: 2,
          testo:
            "Questo dà vita a quello che George Orwell, nel suo celebre romanzo 'La fattoria degli animali', descrive come un sistema in cui la propaganda e la manipolazione dell'informazione sono utilizzate per mantenere il controllo e giustificare le azioni dei leader.",
        },
        {
          id: 3,
          testo:
            "L’esempio più eclatante ai giorni d’oggi di una comunicazione che giustifica l'intervento militare è rappresentato da quello che sta succedendo in Ucraina e in Palestina.",
        },
        {
          id: 4,
          testo:
            "Questo tipo di manipolazione crea un clima di paura e odio, rendendo la guerra non solo accettabile ma necessaria agli occhi del pubblico. Dobbiamo essere consapevoli di queste dinamiche e resistere alla tentazione di accettare passivamente le informazioni che ci vengono fornite.",
        },
      ],
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Kitchener-leete.jpg/220px-Kitchener-leete.jpg",
    },
    {
      capitolo: 2,
      titolo: "L'Era della Globalizzazione dell'Informazione",
      paragrafi: [
        {
          id: 1,
          testo:
            "Oggi una guerra non è combattuta solamente con le armi, viviamo in un'era in cui internet, i social media e i media online hanno rivoluzionato il mondo. Tutti siamo sui social media, questo enorme afflusso di persone rende i social media ed internet il posto migliore per politici o chiunque altro per manipolare, disinformare ed pubblicizzare le loro strategie propagandistiche, giuste o sbagliate che siano. La capacità di influenzare l'opinione pubblica attraverso la comunicazione è diventata un'arma strategica.",
        },
        {
          id: 2,
          testo:
            "Le fake news e la disinformazione possono propagarsi rapidamente, creando confusione e fomentando divisioni. È essenziale che impariamo a navigare nel vasto oceano di informazioni digitali con spirito critico. Dobbiamo promuovere l'alfabetizzazione mediatica e incoraggiare i nostri cittadini a verificare le fonti e a riflettere sulle notizie che leggono.",
        },
      ],
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxziD_nKcUf22z7wza6eNU_LZ-N1YUq9wuxemq6vd3Q&s",
    },
    {
      capitolo: 3,
      titolo: " L'Impatto della Tecnologia",
      paragrafi: [
        {
          id: 1,
          testo:
            "Il progresso di nuove tecnologie ci rende responsabili di come le utilizziamo, la tecnologia ha cambiato il modo in cui percepiamo e facciamo la guerra. La tecnologia rappresenta il progresso, ed il progresso non va fermato, ma dovrebbe essere regolamentato in modo da ridurre al minimo l’utilizzo improprio di queste tecnologie, che possono essere straordinariamente utili per la nostra vita quanto pericolose se utilizzate impropriamente.",
        },
        {
          id: 2,
          testo:
            "Un esempio di un arma a doppio taglio sono le criptovalute, delle monete completamente decentralizzate grazie all’utilizzo della blockchain. Il vantaggio di questa tecnologia è proprio questa decentralizzazione rispetto ad enti privati e governativi come delle banche o dei governi, il lato negativo di questa tecnologia è la difficile identificazione di chi ha fatto una transazione.",
        },
        {
          id: 3,
          testo:
            "Questo perché l'identità di chi fa una transazione non viene esplicitata o regolamentata da un ente centrale come una banca, anche se tutte le transazioni sono visibili a tutti, non è possibile risalire esattamente a chi ha fatto una transazione.",
        },
        {
          id: 4,
          testo:
            "Questo rende le criptovalute un ottimo strumento per attività criminali organizzate e per finanziare operazioni militari illegali. Come ogni tecnologia che porta una rivoluzione positiva presenta dei limiti e dei pericoli se utilizzata impropriamente, è nostro dovere formare le generazioni a venire sul corretto utilizzo di queste tecnologie, la stessa cosa riguardo l’intelligenza artificiale, diffondendo consapevolezza e responsabilità.",
        },
      ],
      img: "https://www.telefonica.com/en/wp-content/uploads/sites/5/2022/06/Imagen1.jpg?w=1224&h=673&crop=1",
    },
    {
      capitolo: 4,
      titolo: " Il Consenso e la Giustizia",
      paragrafi: [
        {
          id: 1,
          testo:
            "Il consenso è un principio fondamentale in una società democratica. Nessuna decisione di tale gravità, come quella di entrare in guerra, dovrebbe essere presa senza un ampio consenso da parte del popolo. È nostro dovere opporci alla guerra e lottare per far sì che quei diritti inviolabili che abbiamo ottenuto con fatica restino tali.",
        },
        {
          id: 2,
          testo:
            "È necessario e fondamentale utilizzare il nostro diritto di voto per fare in modo che sbagli che sono avvenuti nel passato non si ripetano mai più. Solo attraverso una partecipazione attiva e informata possiamo sperare di prevenire ulteriori conflitti e garantire che le decisioni prese riflettano veramente la volontà del popolo.",
        },
        {
          id: 3,
          testo:
            "Inoltre, il sistema giudiziario deve garantire che le leggi internazionali siano rispettate e che i crimini di guerra non rimangano impuniti. Il processo penale deve essere uno strumento di giustizia e non di vendetta. Questo non solo per rendere giustizia alle vittime, ma anche per stabilire un precedente che dissuada futuri atti di barbarie e mantenga l'ordine internazionale",
        },
        {
          id: 4,
          testo:
            "L'importanza dello strumento della giustizia non può essere sottovalutata. La giustizia è il pilastro su cui si basa la fiducia dei cittadini nelle istituzioni. Quando le leggi vengono applicate in modo equo e trasparente, si crea un senso di sicurezza e ordine che è essenziale per il funzionamento armonioso di qualsiasi società. In contesti di guerra, la giustizia assume un ruolo ancora più cruciale. Garantire che coloro che commettono atrocità siano chiamati a rispondere delle loro azioni non solo fornisce un senso di risarcimento alle vittime, ma serve anche come deterrente per futuri crimini. Una giustizia forte e imparziale è la base su cui costruire una pace duratura e prevenire il ripetersi degli orrori del passato.",
        },
      ],
      img: "https://i2.res.24o.it/images2010/Editrice/ILSOLE24ORE/ILSOLE24ORE/2023/02/12/Commenti%20e%20inchieste/ImmaginiWeb/Ritagli/AdobeStock_565100773-kGCH--1020x533@IlSole24Ore-Web.jpeg?r=1080x566",
    },
    {
      capitolo: 5,
      titolo: "Razzismo e Guerra",
      paragrafi: [
        {
          id: 1,
          testo:
            "La guerra può causare e alimentare razzismo e xenofobia, soprattutto all’interno dei territori in guerra ma all’estero. Purtroppo abbiamo molti esempi di questo, persone che scappano dal proprio paese come Russi ed Ucraini che molto spesso non vengono accolti nella società come meriterebbero. Ma vengono discriminati e visti agli occhi della popolazione più ignorante come portatori dell’ideologia del proprio paese. Quello che dovremmo ricordarci è che non dobbiamo associare ideologie politiche di stati totalitari come la Russia di Putin a tutti i russi. È nostro dovere combattere questi pregiudizi e promuovere una cultura di inclusione e rispetto per tutte le persone.",
        },
      ],
      img: "https://images.ctfassets.net/qpn1gztbusu2/73F6n7qzizBCqbwbAPHTsP/470126d4b7f3fdf888b215816ea3d484/livre-audio-racisme.jpg?fm=jpg&w=3840&q=70",
    },
    {
      capitolo: 6,
      titolo: "Global Warming",
      paragrafi: [
        {
          id: 1,
          testo:
            "Infine, non possiamo ignorare l'impatto devastante che la guerra ha sull'ambiente. Le guerre moderne contribuiscono significativamente al riscaldamento globale attraverso l'inquinamento, la distruzione degli ecosistemi e l'uso intensivo di risorse. In un momento in cui il nostro pianeta è già gravemente minacciato dai cambiamenti climatici, dobbiamo cercare soluzioni pacifiche e sostenibili per risolvere i conflitti.",
        },
      ],
      img: "https://s45727.pcdn.co/wp-content/uploads/2020/10/Climate-change-2-scaled-2.jpg.optimal.jpg",
    },
    {
      capitolo: 7,
      titolo: "Conclusione",
      paragrafi: [
        {
          id: 1,
          testo:
            "In conclusione la guerra non è mai stata una soluzione ai nostri problemi, come la storia ci ha insegnato in passato, il vero problema è la guerra. Io credo fermamente che la partecipazione a questo conflitto non sia giusta né necessaria. Dobbiamo trovare vie alternative per risolvere i nostri disaccordi e costruire un futuro migliore per tutti.",
        },
        {
          id: 2,
          testo: "Grazie.",
        },
      ],
      img: "",
    },
  ],
};

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  italiano,
  storia,
  educazioneCivica,
  aboutMe
};
