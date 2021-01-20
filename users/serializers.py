from rest_framework import serializers
from rest_auth.serializers import UserDetailsSerializer
from .models import User

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'id', 'username', 'email', 'first_name', 'last_name', 'about', 'profile_picture', 'is_staff', 'is_active', 'last_login', 'date_joined']
        read_only_fields = ['is_staff', 'is_active', 'last_login', 'date_joined']
        extra_kwargs = {
            'url': {'lookup_field': 'id'}
        }


class UserDetailsSerializer(UserDetailsSerializer):
    profile_picture = serializers.ImageField()
    about = serializers.CharField(max_length=500)

    class Meta(UserDetailsSerializer.Meta):
        fields = UserDetailsSerializer.Meta.fields + ('profile_picture','about')
        
    def update(self, instance, validated_data):
        profile_data = validated_data.pop('user', {})
        profile_picture = profile_data.get('profile_picture')
        instance = super(UserSerializer, self).update(instance, validated_data)

        # get and update user profile
        profile = instance.user
        if profile_data and profile_picture:
            profile.profile_picture = profile_picture
            profile.save()
        return instance