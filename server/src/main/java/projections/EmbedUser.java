package projections;

import com.codeclan.projects.cms.models.Article;
import com.codeclan.projects.cms.models.User;
import org.springframework.data.rest.core.config.Projection;

import java.util.Calendar;

@Projection(name = "embedUser", types = Article.class)
public interface EmbedUser {
    int getViews();
    Long getId();
    String getTitle();
    String getLead();
    String getBody();
    String getTag();
    Calendar getDate();
    User getUser();
}

