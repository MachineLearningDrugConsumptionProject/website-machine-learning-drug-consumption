from flask import Blueprint, request, jsonify
import xgboost as xgb
import numpy as np
import os
import sys

sys.path.append("..")
from model.mappings import age_mapping, gender_mapping, education_mapping, country_mapping, ethnicity_mapping, drug_col

main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def index():
    return jsonify({'message': 'Welcome to my Flask app!'})

@main_bp.route('/predict', methods= ['POST'])
def predict():
    
    try:
        model = xgb.XGBRegressor()
        model_path = os.path.join(os.path.dirname(__file__), '../model/model.xgb')
        model.load_model(model_path)

        data = request.get_json(force= True)
        age = data.get('age')
        gender = data.get('gender')
        education = data.get('education')
        country = data.get('country')
        ethnicity = data.get('ethnicity')
        n_score = data.get('n_score')
        e_score = data.get('e_score')
        o_score = data.get('o_score')
        a_score = data.get('a_score')
        c_score = data.get('c_score')
        impulsive = data.get('impulsive')
        ss = data.get('ss')

        # Encode categorical inputs using mappings
        age_encoded = age_mapping[age]
        gender_encoded = gender_mapping[gender]
        education_encoded = education_mapping[education]
        country_encoded = country_mapping[country]
        ethnicity_encoded = ethnicity_mapping[ethnicity]

        # Prepare input data for prediction (both categorical and numerical features)
        input_data = np.array([[age_encoded, gender_encoded, education_encoded, country_encoded, ethnicity_encoded,
                                n_score, e_score, o_score, a_score, c_score, impulsive, ss]])

        # Make prediction
        y_test_pred = model.predict(input_data)[0]
        y_test_pred = np.round(y_test_pred).astype(int)

        result = drug_col[y_test_pred]

        return jsonify({'prediction': result})
    except Exception as e:
        return jsonify({'error': str(e)})