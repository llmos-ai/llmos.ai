---
sidebar_position: 2
title: Model Serving
---

LLMOS helps you to create a model serving through the `ModelServe` resource, which is a intuitive interface to specify a model serving configurations
(resource requirements, setup commands, run commands, file mounts, storage mounts, and so on).

LLMOS provides a intuitive interface to create a model serving through the `ModelService` resource. It supports the following features:


### Environment Variables

### Example YAML
```yaml
# modelservice yaml file
apiVersion: ml.llmos.ai/v1
kind: ModelService
metadata:
  name: gemma-2-9b-it
spec:
  replicas: 1
  model: google/gemma-2-9b-it
  updateStrategy:
    type: RollingUpdate
  template:
    spec:
      runtimeClassName: nvidia
      containers:
        - name: server
          image: vllm/vllm-openai:latest
          ports:
            - containerPort: 8000
              protocol: TCP
              name: http
          env:
            - name: HUGGING_FACE_HUB_TOKEN
              valueFrom:
                secretKeyRef:
                  name: huggingface-token
                  key: token
          volumeMounts:
            - mountPath: /dev/shm
              name: memory-cache
            - mountPath: /root/.cache/huggingface
              name: hf-dir
          resources:
            limits:
              nvidia.com/gpu: "1"
      volumes:
        - emptyDir:
            medium: Memory
          name: memory-cache
        - name: hf-dir
          persistentVolumeClaim:
            claimName: gemma-2-9b-it-hf-dir # keep the name to be consistent with the spec.volumes name
  volumes:
    - name: gemma-2-9b-it-hf-dir
      spec:
        accessModes:
          - ReadWriteOnce
        resources:
          requests:
            storage: 20Gi
  serviceType: ClusterIP
```

