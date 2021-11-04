pipeline {
     agent any
     stages {
          stage("start") {
            steps {
               echo "building started"
            }
        }
        stage("Build") {
            steps {
                sh "npm install"
                sh "npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "rm -rf /home/velectic/node_code/expy-jenkins"
                sh "cp -r ${WORKSPACE}/build/ /home/velectic/node_code/expy-jenkins/"
            }
        }
    }
}