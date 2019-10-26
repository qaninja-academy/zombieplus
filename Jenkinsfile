pipeline {
    agent {
        docker { image "node" }
    }
    stages {
        stage('Build') {
            steps {
                sh "npm install"
            }
            
        }
        stage('Tests') {
            steps {
                sh "npm test"
            }
        }
    }
}