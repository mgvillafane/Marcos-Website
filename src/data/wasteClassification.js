import WastePipelineImg from '../public/models/waste-classification.svg'

const wasteClassification = {
  slug: 'waste-detection-classification',
  title: 'Waste Detection & Classification',
  status: 'In progress',
  desc: 'Computer vision research combining YOLO object detection with separate CNN classifiers to study how training datasets affect waste recognition.',
  tech: 'Python, PyTorch, Ultralytics YOLO, Databricks, TensorBoard',
  image: WastePipelineImg,
  imageAlt: 'Proposed waste recognition pipeline: detect objects with YOLO, crop each object, then classify its material with a CNN',
  imageFit: 'contain',
  categories: ['Deep Learning'],
  github: 'https://github.com/mgvillafane/TrashClassifierYoloCNN',
  team: [
    {
      name: 'Marcos Gomez Villafañe',
      email: 'mgomezvillafane@berkeley.edu',
    },
    {
      name: 'Fabien Florent Christian Lazes',
      email: 'fabien@berkeley.edu',
    },
    {
      name: 'Hanjoo Kim',
      email: 'hanjoo_kim@berkeley.edu',
    },
  ],
  overview: 'Waste recognition is difficult when objects vary in shape, size, orientation, and background. This ongoing team project investigates a two-stage approach: locate waste objects with a detector, then classify individual crops with a separate CNN. The central research question is how dataset composition affects recognition and generalization, starting with a SortWaste-only baseline and comparing classifiers trained on RealWaste/TrashNet and a combined RealWaste/TrashNet/SortWaste dataset. The repository currently focuses on the TACO object detection pipeline; the classifier comparison and integrated live demonstration remain planned work.',
  featuresTitle: 'Current Development',
  featuresNavLabel: 'Development',
  features: [
    'TACO data preparation with COCO-to-YOLO annotation conversion and separate training, validation, and held-out test sets',
    'An explicit mapping from TACO’s 60 original categories to cardboard, glass, metal, paper, plastic, and residual trash',
    'YOLO26 Medium fine-tuning, validation, prediction, and ground-truth comparison tools',
    'Local and Databricks GPU training with saved checkpoints and experiment configurations',
    'TensorBoard monitoring, per-class detection metrics, and qualitative prediction visualizations',
  ],
  datasets: [
    { name: 'SortWaste', task: 'Object detection', purpose: 'Industrial waste imagery; proposed baseline and a source of object crops for classification.' },
    { name: 'TACO', task: 'Object detection', purpose: 'Litter in real environments; current detection pipeline maps 60 original categories to six material labels.' },
    { name: 'RealWaste', task: 'Classification', purpose: 'Nine waste categories photographed in a landfill environment.' },
    { name: 'TrashNet', task: 'Classification', purpose: 'Six material classes, mostly photographed against clean backgrounds.' },
  ],
  datasetNote: 'The TACO-to-TrashNet label mapping is a project-specific approximation. Mixed materials and unknown litter introduce label noise that must be considered when comparing datasets.',
  technologyOverview: 'Python and PyTorch support the learning pipeline, with Ultralytics providing YOLO detection. Databricks runs GPU experiments, while TensorBoard tracks training losses, precision, recall, and mAP. The classification study will compare a CNN trained from scratch with pretrained models such as ResNet.',
  outcomesTitle: 'Planned Evaluation',
  outcomesNavLabel: 'Evaluation',
  outcomesIntro: 'Experiments are ongoing. Final model comparisons and end-to-end results are not yet available.',
  outcomes: [
    'Compare SortWaste-only, RealWaste/TrashNet, and combined-dataset training to measure the effect of dataset composition',
    'Report classification accuracy, per-class performance, and confusion matrices alongside detection precision, recall, mAP50, and mAP50–95',
    'Measure inference speed, model size, and computational requirements to compare predictive performance with efficiency',
    'Evaluate robustness to noise and unfamiliar environments through data augmentation and held-out evaluation',
    'Integrate detection and classification for live camera experiments; optionally test self-captured images of crushed, folded, or partially occluded waste',
  ],
  timeline: [
    { period: 'Oct 12 – Nov 1', task: 'Prepare datasets and splits, establish CNN and detector baselines, tune models, and begin pipeline integration.' },
    { period: 'Nov 2 – 8', task: 'Prepare the progress report and analyze learning with augmented data.' },
    { period: 'Nov 9 – 22', task: 'Develop the live demonstration, analyze failures, compare unseen environments, and run ablation studies.' },
    { period: 'Nov 23 – Dec 6', task: 'Draft the paper, generate figures and confusion matrices, incorporate peer feedback, and prepare the demo video.' },
    { period: 'Dec 7 – 11', task: 'Complete final paper revisions, project video, and report.' },
  ],
}

export default wasteClassification
