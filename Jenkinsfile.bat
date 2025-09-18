pipeline {
  agent any
  environment {
    NODE_VERSION = '22'
  }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Install') {
      steps {
        sh 'npm ci'
      }
    }
    stage('Run') {
      steps {
        sh 'npm test'
      }
    }
  }
  post {
    always {
      archiveArtifacts allowEmptyArchive: true, artifacts: 'cypress/screenshots/**, cypress/videos/**, logs/**, cypress/reports/**'
      junit allowEmptyResults: true, testResults: 'cypress/reports/**/*.xml'
    }
  }
}
