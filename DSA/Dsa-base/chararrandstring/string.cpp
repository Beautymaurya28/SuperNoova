#include<iostream>
using namespace std;
int main(){
    char name[20];
    cout<<"enter your name "<<endl;
    cin>>name;
    name[2]='\0';
    cout<<"your name is "<<name;
    return 0;
}