from flask import Flask, request, jsonify
from transformers import TFAutoModelForSeq2SeqLM, AutoTokenizer

app = Flask(__name__)
model = TFAutoModelForSeq2SeqLM.from_pretrained("facebook/mbart-large-50-one-to-many-mmt")
tokenizer = AutoTokenizer.from_pretrained("facebook/mbart-large-50-one-to-many-mmt", src_lang="en_XX")

@app.route('/translate', methods=['POST'])
def translate():
    data = request.json
    text = data.get('text')
    if not text:
        return jsonify({'error': 'Text not provided'}), 400

    inputs = tokenizer(text, return_tensors="tf", padding=True, truncation=True)
    translated_ids = model.generate(inputs["input_ids"], max_length=100, num_return_sequences=1)
    translated_texts = tokenizer.batch_decode(translated_ids, skip_special_tokens=True)
    
    return jsonify({'translation': translated_texts[0]})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
