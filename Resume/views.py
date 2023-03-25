import urllib
import json
from django.shortcuts import render
from django.http import HttpResponseRedirect, HttpResponse
import requests
import urllib.parse
import os
from datetime import date as date_n
from datetime import timedelta, datetime
# from django.views.decorators.cache import cache_control
from io import BytesIO
from PIL import Image

url = os.environ.get("BASE_URL")


def home(request):
    project_details = requests.get(url + 'project/api/v1/all-projects/').json()
    session_key = request.session.get('key')
    # print(session_key)
    try:
        basic_info = urllib.parse.unquote(request.COOKIES['basic_info'])
    except KeyError:
        basic_info = ""
    try:
        education_info = urllib.parse.unquote(
            request.COOKIES['education_info'])
    except KeyError:
        education_info = ""
    try:
        work_info = urllib.parse.unquote(request.COOKIES['company_info'])
    except KeyError:
        work_info = ""
    try:
        skill = urllib.parse.unquote(request.COOKIES['skills'])
    except KeyError:
        skill = ""
    try:
        Achievements = urllib.parse.unquote(request.COOKIES['project_info'])
    except KeyError:
        Achievements = ""
    try:
        custom_section = urllib.parse.unquote(
            request.COOKIES['extra_sections'])
    except KeyError:
        custom_section = ""
    try:
        finalize = urllib.parse.unquote(request.COOKIES['finalize'])
    except KeyError:
        finalize = ""

    if session_key:
        key = "Token " + session_key
        headers = {'Authorization': key, 'Content-Type': 'application/json'}
        user_details = requests.get(
            url + 'auth/user/', headers=headers).json()
        user_project = requests.get(url + 'project/api/v1/projects/', headers=headers).json()
        if basic_info:
            response = requests.post(url + 'resume/api/v1/about-yourself/', headers=headers,
                                     data=basic_info)

            if response.status_code == 200:
                print("Basic Info Submitted Successfully")
            else:
                print(response)
        if education_info:
            response = requests.post(url + 'resume/api/v1/education-institutes/', headers=headers,
                                     data=education_info)
            if response.status_code == 200:
                print("Education Info Submitted Successfully")
            else:
                print(response)
        if work_info:
            response = requests.post(url + 'resume/api/v1/professional-institutes/', headers=headers,
                                     data=work_info)
            if response.status_code == 200:
                print("Company Info Submitted Successfully")
            else:
                print(response)
        if skill:
            response = requests.post(
                url + 'resume/api/v1/skills/', headers=headers, data=skill)
            if response.status_code == 200:
                print("Skills Info Submitted Successfully")
            else:
                print(response)
        if Achievements:
            response = requests.post(url + 'resume/api/v1/achievements/', headers=headers,
                                     data=Achievements)
            if response.status_code == 200:
                print("Projects Info Submitted Successfully")
            else:
                print(response)
        if custom_section:
            response = requests.post(url + 'resume/api/v1/other-related-information/', headers=headers,
                                     data=custom_section)
            if response.status_code == 200:
                print("Custom Section Info Submitted Successfully")
            else:
                print(response)
        if finalize:
            response = requests.post(url + 'resume/api/v1/finalize-related-information/',
                                     headers=headers, data=finalize)
            if response.status_code == 200:
                print("Finalize Info Submitted Successfully")
                return clear_cookies(request)
            else:
                print(response.text)
        return render(request, 'landing_page.html',
                      {'User_details': user_details, 'key': session_key, 'details': project_details,
                       'project': user_project})
    return render(request, 'landing_page.html', {'key': session_key, 'details': project_details})


def resume_build(request):
    institutes_name = requests.get(
        url + 'resume/api/v1/institutes/').json()
    session_key = request.session.get('key')
    # For navbar
    if session_key:
        key = "Token " + session_key
        headers = {'Authorization': key}
        user_details = requests.get(
            url + 'auth/user/', headers=headers).json()
        return render(request, 'resume_builder.html',
                      {'User_details': user_details, 'key': session_key, 'institutes_name': institutes_name})
    # For post methods
    return render(request, 'resume_builder.html', {'key': session_key, 'institutes_name': institutes_name})


def profile_view(request):
    session_key = request.session.get('key')
    key = "Token " + session_key
    headers = {'Authorization': key}
    project_details = requests.get(url + 'project/api/v1/projects/', headers=headers).json()
    institutes_name = requests.get(
        url + 'resume/api/v1/institutes/').json()
    user_details = requests.get(
        url + 'auth/user/', headers=headers).json()
    resume_user_info = requests.get(
        url + 'resume/api/v1/about-yourself/', headers=headers).json()
    resume_education_info = requests.get(url + 'resume/api/v1/education-institutes/',
                                         headers=headers).json()
    resume_work_info = requests.get(url + 'resume/api/v1/professional-institutes/',
                                    headers=headers).json()
    resume_project_info = requests.get(url + 'resume/api/v1/achievements/',
                                       headers=headers).json()
    resume_skill_info = requests.get(
        url + 'resume/api/v1/skills/', headers=headers).json()
    resume_related_info = requests.get(url + 'resume/api/v1/finalize-related-information/',
                                       headers=headers).json()
    resume_other_info = requests.get(url + 'resume/api/v1/other-related-information/', headers=headers).json()
    profile_completion = 0

    # Image Check
    if resume_related_info['image']:
        profile_completion += 10
    else:
        print("nai")

    # Social Check
    is_empty = True
    keys_to_check = ['twitter', 'facebook', 'linkedin']
    for key in keys_to_check:
        try:
            if not resume_related_info['social_links'][0].get(key, '') == '':
                is_empty = False
                break
        except:
            is_empty = True
    if is_empty:
        profile_completion = profile_completion
    else:
        profile_completion += 10

    # Basic Check
    is_empty = True
    keys_to_check = ['first_name', 'last_name', 'profession', 'phone_number', 'date_of_birth', 'address', 'bio',
                     'email']
    for key in keys_to_check:
        if resume_user_info.get(key) == '':
            is_empty = True
        else:
            is_empty = False
    if not is_empty:
        profile_completion += 30

    # Education
    if len(resume_education_info) != 0:
        profile_completion += 10

    # Skill
    if len(resume_skill_info) != 0:
        profile_completion += 10

    # Project
    if len(project_details) != 0:
        profile_completion += 10

    # achievements
    if len(resume_project_info) != 0:
        profile_completion += 10

    # Work
    if len(resume_work_info) != 0:
        profile_completion += 10

    if request.method == 'POST':
        name = request.POST['name']
        temp = name.split(' ', 1)
        first_name = temp[0]
        try:
            last_name = temp[1]
        except:
            last_name = " "
        profession = request.POST['profession']
        phone_number = request.POST['phone_number']
        date_of_birth = request.POST['date_of_birth']
        address = request.POST['address']
        email = request.POST['email']
        payload = {'first_name': first_name, 'last_name': last_name, 'profession': profession,
                   'phone_number': phone_number, 'date_of_birth': date_of_birth, 'address': address, 'email': email}
        response = requests.post(
            url + 'resume/api/v1/about-yourself/', headers=headers, data=payload)
        # return profile view if success updating
        if response.status_code == 200:
            print("Ok")
            return HttpResponseRedirect('/profile')
        else:
            print("Wrong")
    return render(request, 'profile.html',
                  {'User_details': user_details, 'key': session_key, 'resume_basic': resume_user_info,
                   'resume_education': resume_education_info, 'resume_skill': resume_skill_info,
                   'details': project_details, 'resume_work_info': resume_work_info,
                   'resume_project_info': resume_project_info, 'resume_related_info': resume_related_info,

                   'resume_other_info': resume_other_info, 'institutes_name': institutes_name, 'profile_completion': profile_completion})


def profile_info(request):
    session_key = request.session.get('key')
    key = "Token " + session_key
    headers = {'Authorization': key}
    project_details = requests.get(url + 'project/api/v1/projects/', headers=headers).json()
    user_details = requests.get(
        url + 'auth/user/', headers=headers).json()
    resume_user_info = requests.get(
        url + 'resume/api/v1/about-yourself/', headers=headers).json()
    resume_education_info = requests.get(url + 'resume/api/v1/education-institutes/',
                                         headers=headers).json()
    resume_skill_info = requests.get(
        url + 'resume/api/v1/skills/', headers=headers).json()
    if request.method == 'POST':
        bio = request.POST.get('user_bio')
        payload = {'bio': bio}
        response = requests.post(
            url + 'resume/api/v1/about-yourself/', headers=headers, data=payload)
        if response.status_code == 200:
            print("bio posted")
            return HttpResponseRedirect('/profile')
        else:
            print("Wrong")
    return render(request, 'profile.html',
                  {'User_details': user_details, 'key': session_key, 'resume_basic': resume_user_info,
                   'resume_education': resume_education_info, 'resume_skill': resume_skill_info,
                   'details': project_details})


def signin(request):
    if request.method == 'POST':
        email = request.POST['signIn_email']
        password = request.POST['signin_password']
        payload = {'email': email, 'password': password}
        response = requests.post(
            url + 'auth/login/', data=payload)

        # return home view if success login
        if response.status_code == 200:
            response_dict = json.loads(response.text)
            session_key = response_dict['key']
            request.session['key'] = session_key
            return HttpResponseRedirect('/')
        else:
            response_dict = response.json()
            try:
                error = response_dict.get('non_field_errors')[0]
            except:
                error = response_dict.get('detail')
            return render(request, 'signin.html', {'error': error})
    return render(request, 'signin.html')


def signup(request):
    if request.method == 'POST':
        email = request.POST['signUp_email']
        first_name = request.POST['fname']
        last_name = request.POST['lname']
        password_1 = request.POST['password1']
        password_2 = request.POST['password2']
        payload = {'email': email, 'first_name': first_name,
                   'last_name': last_name, 'password1': password_1, 'password2': password_2}
        response = requests.post(
            url + 'auth/registration/', data=payload)

        if response.status_code == 201:
            return render(request, 'login/confirm_email.html')
        else:
            response_dict = response.json()
            try:
                error = response_dict.get('non_field_errors')[0]
            except:
                error = "A user is already existed with this email"
            return render(request, 'signup.html', {'error': error})
    return render(request, 'signup.html')


def logout(request):
    session_key = request.session.get('key')
    if session_key:
        key = "Token " + session_key
        headers = {'Authorization': key}
        response = requests.post(
            url + 'auth/logout/', headers=headers)
        if response.status_code == 200:
            request.session.flush()
            return HttpResponseRedirect('/')


def resetPass(request):
    if request.method == 'POST':
        email = request.POST['email']
        payload = {'email': email}
        response = requests.post(url + 'auth/password/reset/', data=payload)
        if response.status_code == 200:
            return render(request, 'login/confirm_reset.html')
    return render(request, 'login/resetPass.html')


def retypepass(request, uid, token):
    if request.method == 'POST':
        new_password1 = request.POST['pass1']
        new_password2 = request.POST['pass2']
        payload = {'new_password1': new_password1, 'new_password2': new_password2, 'uid': uid, 'token': token}
        burl = url + 'auth/password/reset/confirm/' + uid + '/' + token + '/'
        response = requests.post(burl, data=payload)
        if response.status_code == 200:
            return render(request, 'signin.html')
    return render(request, 'login/retypePass.html')


def find_Talent(request, search, address):
    talent_data = requests.get(
        url + 'user/api/v1/talents/', params={'limit': 10, 'profession': search, 'address': address}).json()
    session_key = request.session.get('key')
    # For navbar
    if session_key:
        key = "Token " + session_key
        headers = {'Authorization': key}
        user_details = requests.get(
            url + 'auth/user/', headers=headers).json()
        return render(request, 'Talent/findTalent.html',
                      {'User_details': user_details, 'key': session_key, 'talent_info': talent_data, 'search': search,
                       'address': address})
    else:
        return render(request, 'Talent/findTalent.html',
                      {'talent_info': talent_data, 'search': search, 'address': address})


def hire_Talent(request, UID):
    session_key = request.session.get('key')
    burl = url + 'user/api/v1/talents/' + UID + '/'
    talent_info = requests.get(burl).json()
    if len(talent_info) != 0:
        email = talent_info.get('email')
        phone = talent_info.get('phone_number')
        try:
            list_of_digits = [int(i) for i in str(phone)]
        except:
            list_of_digits = []
        hidden_phone_arr = list_of_digits[0:4]
        hidden_phone = ''
        for i in hidden_phone_arr:
            hidden_phone = hidden_phone + str(i)
        hidden_phone = hidden_phone + "****"
        hidden_email_arr = email.split('@')
        hidden_email = hidden_email_arr[0]
        hidden_email_concat = hidden_email + "****"
    else:
        hidden_phone = ''
        hidden_email_concat = ''
    if request.method == "POST":
        from_email = request.POST['senderEmail']
        to_email = request.POST['recipientEmail']
        subject = request.POST['senderSubject']
        message = request.POST['senderEmailBody']
        payload = {'from_email': from_email, 'to_email': to_email, 'subject': subject, 'message': message}
        response = requests.post(url + 'resume/api/v1/hire/', data=payload)
    try:
        key = "Token " + session_key
        headers = {'Authorization': key}
        user_details = requests.get(
            url + 'auth/user/', headers=headers).json()
        return render(request, 'Talent/talent_hire.html',
                      {'User_details': user_details, 'key': session_key, 'talent_info': talent_info,
                       'hidden_email_concat': hidden_email_concat, 'hidden_phone': hidden_phone})
    except:
        return render(request, 'Talent/talent_hire.html',
                      {'talent_info': talent_info, 'hidden_email_concat': hidden_email_concat,
                       'hidden_phone': hidden_phone})


def find_Project(request, search, fund_1, fund_2, date_1, date_2, catagory):
    session_key = request.session.get('key')
    if catagory == "All category":
        catagory = ' '
    project_details = requests.get(url + 'project/api/v1/all-projects/',
                                   params={'limit': 10, 'title': search, 'category': catagory, 'start_date': date_1,
                                           'end_date': date_2, 'min_price': fund_1, 'max_price': fund_2}).json()
    if session_key:
        key = "Token " + session_key
        headers = {'Authorization': key}
        user_details = requests.get(
            url + 'auth/user/', headers=headers).json()
        return render(request, 'project/find_Project.html',
                      {'User_details': user_details, 'key': session_key, 'details': project_details, 'search': search,
                       'fund_1': fund_1, 'fund_2': fund_2, 'date_1': date_1, 'date_2': date_2})
    else:
        return render(request, 'project/find_Project.html',
                      {'details': project_details, 'search': search, 'fund_1': fund_1, 'fund_2': fund_2,
                       'date_1': date_1,
                       'date_2': date_2})


def project_details(request, pid):
    session_key = request.session.get('key')
    burl = url + 'project/api/v1/all-projects/' + pid + '/'
    project_detail = requests.get(burl).json()
    if len(project_detail) != 0:
        email = project_detail.get('created_by').get('email')
        hidden_email_arr = email.split('@')
        hidden_email = hidden_email_arr[0]
        hidden_email_concat = hidden_email + "****"
    else:
        hidden_email_concat = ''
    try:
        due_date = project_detail["project_sponsorship"]["sponsors_due_date"]
    except KeyError:
        due_date = ""
    x = due_date.split("-")
    date_1 = date_n.today()
    try:
        date_2 = date_n(int(x[0]), int(x[1]), int(x[2]))
    except:
        date_2 = date_n.today()
    days_remainging = number_of_days(date_1, date_2)
    if request.method == "POST":
        from_email = request.POST['senderEmail']
        to_email = request.POST['recipientEmail']
        subject = request.POST['senderSubject']
        message = request.POST['senderEmailBody']
        payload = {'from_email': from_email, 'to_email': to_email, 'subject': subject, 'message': message,
                   'project': pid}
        response = requests.post(url + 'project/api/v1/sponsor/', data=payload)
    try:
        key = "Token " + session_key
        headers = {'Authorization': key}
        user_details = requests.get(
            url + 'auth/user/', headers=headers).json()
        return render(request, 'project/project_details.html',
                      {'User_details': user_details, 'key': session_key, 'details': project_detail,
                       'days_remainging': days_remainging, 'email': hidden_email_concat})
    except:
        return render(request, 'project/project_details.html',
                      {'details': project_detail, 'days_remainging': days_remainging, 'email': hidden_email_concat})


def add_project(request):
    session_key = request.session.get('key')
    key = "Token " + session_key
    header = {'Authorization': key}
    user_details = requests.get(
        url + 'auth/user/', headers=header).json()
    participants_list = requests.get(url + 'user/api/v1/all-users/', headers=header).json()
    if request.method == 'POST':
        head = {'Authorization': key}
        title = request.POST['project_title']
        category = request.POST['project_category']
        participants = request.POST['project_participants']
        participants_list = [participants]
        project_description = request.POST['project_description']
        # Project Image
        images_1 = request.FILES["project_image_1"]
        images_1 = convert_to_webp(images_1, aspect_ratio=24/13)

        images_2 = request.FILES["project_image_2"]
        images_2 = convert_to_webp(images_2, aspect_ratio=24/13)

        images_3 = request.FILES["project_image_3"]
        images_3 = convert_to_webp(images_3, aspect_ratio=24/13)

        images_4 = request.FILES["project_image_4"]
        images_4 = convert_to_webp(images_4, aspect_ratio=24/13)

        images_5 = request.FILES["project_image_5"]
        images_5 = convert_to_webp(images_5, aspect_ratio=24/13)

        payload = {'title': title, 'participants': participants_list,
                   'project_description': project_description, 'category': category}
        file = [('images', images_1), ('images', images_2), ('images', images_3), ('images', images_4),
                ('images', images_5)]
        response = requests.post(
            url + 'project/api/v1/projects/', headers=head, data=payload, files=file)
        if response.status_code == 200:
            return HttpResponseRedirect('/profile')
    return render(request, 'profile/add_project.html',
                  {'User_details': user_details, 'key': session_key, 'usersdata': participants_list})


def project_view(request, pid):
    session_key = request.session.get('key')
    key = "Token " + session_key
    headers = {'Authorization': key}
    burl = url + 'project/api/v1/projects/' + pid + '/'
    project_detail = requests.get(burl, headers=headers).json()
    user_details = requests.get(url + 'auth/user/', headers=headers).json()
    achievment_details = requests.get(url + 'project/api/v1/project-activities/', headers=headers,
                                      params={'project': pid}).json()
    return render(request, 'profile/view/project_view.html',
                  {'User_details': user_details, 'key': session_key, 'details': project_detail, 'pid': pid,
                   'achievements': achievment_details})


def ranking(request):
    session_key = request.session.get('key')
    university_rank = requests.get(url + 'resume/api/v1/university-ranking/').json()
    school_rank = requests.get(url + 'resume/api/v1/school-ranking/').json()
    college_rank = requests.get(url + 'resume/api/v1/college-ranking/').json()
    try:
        key = "Token " + session_key
        headers = {'Authorization': key}
        user_details = requests.get(
            url + 'auth/user/', headers=headers).json()
        return render(request, 'ranking/ranking.html',
                      {'User_details': user_details, 'key': session_key, 'uni_rank': university_rank,
                       'college_rank': college_rank, 'school_rank': school_rank, })
    except:
        return render(request, 'ranking/ranking.html',
                      {'uni_rank': university_rank, 'college_rank': college_rank, 'school_rank': school_rank, })


def quiz_start(request, skill_id, name):
    session_key = request.session.get('key')
    key = "Token " + session_key
    headers = {'Authorization': key}
    skill_result = requests.get(url + '/quiz/api/v1/results/?skill=' + skill_id, headers=headers).json()
    user_details = requests.get(
        url + 'auth/user/', headers=headers).json()
    date_today = date_n.today()
    if len(skill_result) != 0:
        skill_result_dict = skill_result[0].get('updated_at')
        updated_at_date_arr = skill_result_dict.split('T')
        updated_at_date = updated_at_date_arr[0]
        formatted_date = datetime.strptime(updated_at_date, '%Y-%m-%d')
        due_date_time = formatted_date + timedelta(days=90)
        due_date_arr = str(due_date_time).split(' ')
        due_date = due_date_arr[0]
        x = due_date.split("-")
        date_2 = date_n(int(x[0]), int(x[1]), int(x[2]))
        remaining_days = number_of_days(date_today, date_2)
    else:
        remaining_days = 0
    return render(request, 'quiz_page/quiz_start.html',
                  {'skill_id': skill_id, 'skill_name': name, 'User_details': user_details, 'key': session_key,
                   'date': remaining_days})


def quiz_questions(request, skill_id, name):
    session_key = request.session.get('key')
    key = "Token " + session_key
    headers = {'Authorization': key}
    user_details = requests.get(
        url + 'auth/user/', headers=headers).json()
    questions = requests.get(url + 'quiz/api/v1/questions/', headers=headers,
                             params={'skill': skill_id}).json()
    skill_result = requests.get(url + '/quiz/api/v1/results/?skill=' + skill_id, headers=headers).json()
    skill_result_standing = requests.get(url + '/quiz/api/v1/ranking/?skill=' + skill_id, headers=headers).json()
    date_today = date_n.today()
    if len(skill_result) != 0:
        skill_result_dict = skill_result[0].get('updated_at')
        updated_at_date_arr = skill_result_dict.split('T')
        updated_at_date = updated_at_date_arr[0]
        formatted_date = datetime.strptime(updated_at_date, '%Y-%m-%d')
        due_date_time = formatted_date + timedelta(days=90)
        due_date_arr = str(due_date_time).split(' ')
        due_date = due_date_arr[0]
        x = due_date.split("-")
        date_2 = date_n(int(x[0]), int(x[1]), int(x[2]))
        remaining_days = number_of_days(date_today, date_2)
    else:
        remaining_days = 0
    if remaining_days < 1:
        return render(request, 'quiz_page/questions.html',
                      {'skill_id': skill_id, 'skill_name': name, 'User_details': user_details, 'key': session_key,
                       'questions': questions})
    else:
        return render(request, 'quiz_page/result.html',
                      {'skill_id': skill_id, 'skill_name': name, 'User_details': user_details, 'key': session_key,
                       'result': skill_result, 'date': remaining_days, 'standing': skill_result_standing})


def quiz_result(request, skill_id, name):
    session_key = request.session.get('key')
    key = "Token " + session_key
    headers = {'Authorization': key}
    user_details = requests.get(
        url + 'auth/user/', headers=headers).json()
    skill_result = requests.get(url + '/quiz/api/v1/results/?skill=' + skill_id, headers=headers).json()
    skill_result_standing = requests.get(url + '/quiz/api/v1/ranking/?skill=' + skill_id, headers=headers).json()
    date_today = date_n.today()
    try:
        skill_result_dict = skill_result[0].get('updated_at')
        updated_at_date_arr = skill_result_dict.split('T')
        updated_at_date = updated_at_date_arr[0]
        formatted_date = datetime.strptime(updated_at_date, '%Y-%m-%d')
        due_date_time = formatted_date + timedelta(days=90)
        due_date_arr = str(due_date_time).split(' ')
        due_date = due_date_arr[0]
        x = due_date.split("-")
        date_2 = date_n(int(x[0]), int(x[1]), int(x[2]))
        remaining_days = number_of_days(date_today, date_2)
    except:
        remaining_days = 0
    if request.method == 'POST':
        header = {'Authorization': key, 'Accept': '*/*',
                  'Content-Type': 'application/json'}
        payloads = []
        for i in range(10):
            q1_id = request.POST.get(str(i))
            q1_value = request.POST.get("flexRadioDefault" + str(i))
            if q1_value is None:
                q1_value = "N/A"
            if q1_id is None:
                q1_id = "0"
            info = {"id": q1_id, "correct_ans": q1_value}
            payloads.append(info)
        payload = json.dumps(payloads)
        burl = url + "quiz/api/v1/result-submissions/" + skill_id + "/"
        if remaining_days < 1:
            response = requests.post(burl, headers=header, data=payload)
            if response.status_code == 200:
                result_1 = json.loads(response.text)
                result = [result_1]
                return render(request, 'quiz_page/result.html',
                              {'skill_id': skill_id, 'skill_name': name, 'User_details': user_details,
                               'key': session_key,
                               'result': result})
        else:
            return HttpResponseRedirect('/profile')
    return render(request, 'quiz_page/result.html',
                  {'skill_id': skill_id, 'skill_name': name, 'User_details': user_details, 'key': session_key,
                   'result': skill_result, 'date': remaining_days, 'standing': skill_result_standing})


def clear_cookies(request):
    response = HttpResponseRedirect('/')
    response.delete_cookie('basic_info')
    response.delete_cookie('education_info')
    response.delete_cookie('company_info')
    response.delete_cookie('skills')
    response.delete_cookie('project_info')
    response.delete_cookie('extra_sections')
    response.delete_cookie('finalize')
    return response


def number_of_days(date_1, date_2):
    return (date_2 - date_1).days


def terms(request):
    session_key = request.session.get('key')
    try:
        key = "Token " + session_key
        headers = {'Authorization': key}
        user_details = requests.get(
            url + 'auth/user/', headers=headers).json()
        return render(request, 'terms/terms.html', {'User_details': user_details, 'key': session_key})
    except:
        return render(request, 'terms/terms.html')


def cookies(request):
    session_key = request.session.get('key')
    try:
        key = "Token " + session_key
        headers = {'Authorization': key}
        user_details = requests.get(
            url + 'auth/user/', headers=headers).json()
        return render(request, 'terms/terms.html', {'User_details': user_details, 'key': session_key})
    except:
        return render(request, 'terms/cookie.html')


def privacy(request):
    session_key = request.session.get('key')
    try:
        key = "Token " + session_key
        headers = {'Authorization': key}
        user_details = requests.get(
            url + 'auth/user/', headers=headers).json()
        return render(request, 'terms/terms.html', {'User_details': user_details, 'key': session_key})
    except:
        return render(request, 'terms/privacy.html')


def achievments(request, pid):
    return HttpResponseRedirect('/')


def googleAuth(request):
    fragment = request.GET.get('code')
    response = requests.post(url + '/auth/google/', {'code': fragment})
    if response.status_code == 200:
        response_dict = json.loads(response.text)
        session_key = response_dict['key']
        request.session['key'] = session_key
        return HttpResponseRedirect('/')
        # return JsonResponse({'url': '/profile'})
    else:
        return HttpResponseRedirect('/signin')


def certificate(request, skill, uid):
    temp_name = skill.split('_')
    temp_uid = uid.split('_')
    skill_id = temp_name[1]
    user_id = temp_uid[0]
    parameter = {'skill': skill_id, 'user_id': user_id}
    response = requests.get(url + 'quiz/api/v1/certificates/', params=parameter)
    if response.status_code == 200:
        data = json.loads(response.text)
        skill_result_dict = data[0].get('updated_at')
        updated_at_date_arr = skill_result_dict.split('T')
        updated_at_date = updated_at_date_arr[0]
        formatted_date_time = datetime.strptime(updated_at_date, '%Y-%m-%d')
        date_arr = str(formatted_date_time).split(' ')
        date_arr1 = date_arr[0].split('-')
        date = date_arr1[2] + '-' + date_arr1[1] + '-' + date_arr1[0]
        print(data)
        return render(request, 'certificate.html', {'date': date, 'skill_data': data[0]})
    return HttpResponse(request, '<h1>Sorry Bro</h1>')


def confirm_email(request, vid):
    payload = {"key": vid}
    response = requests.post(url + '/auth/registration/verify-email/', data=payload)
    if response.status_code == 200:
        return HttpResponseRedirect('/signin')
    else:
        print("error")


def add_work(request):
    session_key = request.session.get('key')
    key = "Token " + session_key
    headers = {'Authorization': key, 'Content-Type': 'application/json'}
    if request.method == 'POST':
        name = request.POST['new-company_name']
        designation = request.POST['new-designation']
        city = request.POST['new-city']
        country = request.POST['new-country']
        start_date = request.POST['new-start_date']
        end_date = request.POST['new-end_date']
        if end_date != "":
            currently_working = False
        else:
            end_date = None
            currently_working = True
        payloads = []
        payload = {'name': name, 'designation': designation, 'city': city, 'country': country, 'start_date': start_date,
                   'end_date': end_date, 'currently_working': currently_working}
        payloads.append(payload)
        info = json.dumps(payloads)
        response = requests.post(url + 'resume/api/v1/professional-institutes/', headers=headers, data=info)
        if response.status_code == 200:
            return HttpResponseRedirect('/profile')
        else:
            print(response.text)
            return HttpResponseRedirect('/profile')


def add_achievements(request):
    session_key = request.session.get('key')
    key = "Token " + session_key
    headers = {'Authorization': key, 'Content-Type': 'application/json'}
    if request.method == 'POST':
        name = request.POST['title']
        link = request.POST['link']
        start_date = request.POST['start_date']
        description = request.POST['description']
        end_date = request.POST['end_date']
        links = [link]
        if end_date != "":
            currently_working = False
        else:
            end_date = None
            currently_working = True
        payloads = []
        payload = {'title': name, 'description': description, 'links': links, 'start_date': start_date,
                   'end_date': end_date, "currently_working": currently_working}
        payloads.append(payload)
        info = json.dumps(payloads)
        response = requests.post(url + 'resume/api/v1/achievements/', headers=headers, data=info)
        if response.status_code == 200:
            return HttpResponseRedirect('/profile')
        else:
            print(response.text)
            return HttpResponseRedirect('/profile')


def share_resume(request, user_name, user_id):
    temp_name = user_name.split('_')
    temp_uid = user_id.split('_')
    name = temp_name[1]
    uid = temp_uid[0]
    response = requests.post(url + '/resume/api/v1/share-resume/' + uid + '/')
    if response.status_code == 200:
        user_resume_details = json.loads(response.text)
        return render(request, 'resume_share.html',
                      {'user_name': name, 'uid': uid, 'user_resume_details': user_resume_details})


def convert_to_webp(image, aspect_ratio=None):
    # Open the image using Pillow
    im = Image.open(image)

    # Resize the image to the specified aspect ratio (if provided)
    if aspect_ratio:
        width, height = im.size
        new_height = int(width / aspect_ratio)
        if new_height > height:
            new_width = int(height * aspect_ratio)
            left = int((width - new_width) / 2)
            top = 0
            right = int(left + new_width)
            bottom = height
        else:
            left = 0
            top = int((height - new_height) / 2)
            right = width
            bottom = int(top + new_height)
        im = im.crop((left, top, right, bottom))

    buffer = BytesIO()
    im.save(buffer, "webp")
    buffer.seek(0)

    return buffer
