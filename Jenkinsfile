pipeline {
    agent any
    stages {
        stage('Build') {
            sh "npm install"
        }
        stage('Tests') {
            sh "npm test"
        }
    }
}