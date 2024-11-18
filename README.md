## Usage


Open the repository on GitHub codespace this will spin a containerized environment with
`Dataform tools` VSCode extension pre-installed with `gcloud` and `dataform` clis

You should be able to see compiled query on saving the `.sqlx` file even without having to authenticate to your BigQuery project

To be able to see dry run stats and create tables you would need to run the following


```
gcloud init
```

```
gcloud auth application-default login
```

```
gcloud config set project drawingfire-b72a8 # replace with your gcp project id
```

> Note
Reload your window using ctrl + shift + p and selecting reload window for the default project setting to take
affect
