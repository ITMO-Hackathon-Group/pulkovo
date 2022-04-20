package alliance.pulkovo;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
//        TODO перенаправлять неваторизованные запросы домой, админка
        http
                .csrf().disable()
                .authorizeRequests()
                    .antMatchers("/", "/bundle/**", "/resources/**").permitAll()
                    .anyRequest().authenticated();
    }
}
